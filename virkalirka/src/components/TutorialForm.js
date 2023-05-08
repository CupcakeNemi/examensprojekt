import { useState } from "react"
import { useTutorialContext } from "../hooks/useTutorialContext";


const TutorialForm = () => {
    const { dispatch } = useTutorialContext();

    const [file, setFile] = useState('');
    const [title, setTitle] = useState('');
    const [stepsTitle, setStepsTitle] = useState('');
    const [steps, setSteps] = useState('');
    const [error, setError] = useState(null);

    const formData = new FormData();
    if (file) formData.append('filename', file);
    if (title) formData.append('title', title);
    if (stepsTitle) formData.append('stepsTitle', stepsTitle);
    if (steps) formData.append('steps', steps);

    const handleSubmit = async (e) => {
        e.preventDefault()

        const response = await fetch('/api/tutorials', {
            method: 'POST',
            body: formData
            
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setError(null)
            setTitle('')
            setStepsTitle('')
            setSteps('')
            dispatch({ type: 'CREATE_TUTORIAL', payload: json })
        }


    }

    return (
        <form className="addNew" onSubmit={handleSubmit}>
            <h4>Add new tutorial</h4>
            <input type="file" id="file" name="file" onChange={(e) => setFile(e.target.files[0])}  />
            <input 
                type="text" 
                onChange={(e) => setTitle(e.target.value)} 
                value={title} 
                placeholder="Title" 
                className="formInput"
                />

            <input 
                type="text" 
                onChange={(e) => setStepsTitle(e.target.value)} 
                value={stepsTitle} 
                placeholder="Step title" 
                className="formInput"/>

            <input 
                type="text" 
                onChange={(e) => setSteps(e.target.value)} 
                value={steps} 
                placeholder="Steps" 
                className="formInput"/>

            <button className="btn">Add Tutorial</button>
            {error && <div className="error">{error}</div>}

        </form>
    )
}

export default TutorialForm;