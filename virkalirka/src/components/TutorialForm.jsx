import { useState } from "react";
import URL from "../backendURL";
import { useAuthContext } from "../hooks/useAuthContext";
import { useTutorialContext } from "../hooks/useTutorialContext";

const TutorialForm = () => {
    const { dispatch } = useTutorialContext();
    const { user } = useAuthContext();
    const [file, setFile] = useState('');
    const [title, setTitle] = useState('');
    const [stepsTitle, setStepsTitle] = useState([]);
    const [steps, setSteps] = useState([]);
    const [difficulty, setDifficulty] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        if (file) formData.append('filename', file);
        if (title) formData.append('title', title);
        if (difficulty) formData.append('difficulty', difficulty);
        if (user && user._id) formData.append('postedBy', user._id);

        stepsTitle.forEach((stepTitle, index) =>
            formData.append(`stepsTitle[${index}]`, stepTitle)
        );

        steps.forEach((step, index) =>
            formData.append(`steps[${index}]`, step)
        );

        try {
            const response = await fetch(`${URL}/api/tutorials`, {
                method: 'POST',
                body: formData,
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            });

            const json = await response.json();

            if (!response.ok) {
                setError(json.error);
            } else {
                setError(null);
                setTitle('');
                setStepsTitle([]);
                setSteps([]);
                setDifficulty('');
                dispatch({ type: 'CREATE_TUTORIAL', payload: json });
            }
        } catch (error) {
            console.error(error);
            setError('An error occurred');
        }
    };

    const addStep = () => {
        setStepsTitle([...stepsTitle, '']);
        setSteps([...steps, '']);
    };

    const updateStepTitle = (index, value) => {
        const updatedStepsTitle = [...stepsTitle];
        updatedStepsTitle[index] = value;
        setStepsTitle(updatedStepsTitle);
    };

    const updateStep = (index, value) => {
        const updatedSteps = [...steps];
        updatedSteps[index] = value;
        setSteps(updatedSteps);
    };

    return (
        <div className="flexForm">
            <form className="addNew" onSubmit={handleSubmit}>
                <h4>Add new tutorial</h4>
                <label className="addFile">
                <input type="file" id="file" name="file" onChange={(e) => setFile(e.target.files[0])} />
                </label>
                <input
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    placeholder="Title"
                    className="formInput"
                />
                <select
                    name="difficulty"
                    id="difficulty"
                    onChange={(e) => setDifficulty(e.target.value)}
                    value={difficulty}
                    required
                >
                    <option value="">Difficulty</option>
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                </select>


                {stepsTitle.map((stepTitle, index) => (
                    <div key={index} className="stepsDiv">
                        <input
                            type="text"
                            value={stepTitle}
                            placeholder={`Step title ${index + 1}`}
                            className="formInput"
                            onChange={(e) => updateStepTitle(index, e.target.value)}
                        />

                        <textarea
                            value={steps[index]}
                            placeholder={`Step ${index + 1}`}
                            className="formInput"
                            onChange={(e) => updateStep(index, e.target.value)}
                        />
                    </div>
                ))}

                <button className="newStep btn" type="button" onClick={addStep}><i className="fa-solid fa-plus"></i></button>
                <button className="btn">Add Tutorial</button>
                {error && <div className="error">{error}</div>}
            </form>
        </div>
    );
};

export default TutorialForm;


