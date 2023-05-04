import { useState } from "react"
import { useTutorialContext } from "../hooks/useTutorialContext";

const TutorialForm = () => {
    const { dispatch } = useTutorialContext();

    const [title, setTitle] = useState('');
    const [stepsTitle, setStepsTitle] = useState('');
    const [steps, setSteps] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault()

        const tutorial = { title, stepsTitle, steps}

        const response = await fetch('/api/tutorials', {
            method: 'POST',
            body: JSON.stringify(tutorial),
            headers: {
                'Content-Type': 'application/json'
            }
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