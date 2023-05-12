import { useState } from "react"
import URL from "../backendURL";
import { useAuthContext } from "../hooks/useAuthContext";
// import { useEffect } from "react";

import { useTutorialContext } from "../hooks/useTutorialContext";


const TutorialForm = () => {
    const { dispatch } = useTutorialContext();
    const {user} = useAuthContext();
    const [file, setFile] = useState('');
    const [title, setTitle] = useState('');
    const [stepsTitle, setStepsTitle] = useState('');
    const [steps, setSteps] = useState('');
    const [error, setError] = useState(null);

    console.log("logging33",user)

    const formData = new FormData();
    if (file) formData.append('filename', file);
    if (title) formData.append('title', title);
    if (stepsTitle) formData.append('stepsTitle', stepsTitle);
    if (steps) formData.append('steps', steps);
    // if (postedBy) formData.append('postedBy', postedBy);

    const handleSubmit = async (e) => {
        e.preventDefault()

        const response = await fetch(`${URL}/api/tutorials`, {

            method: 'POST',
            body: formData,
            headers: {
                'Authorization': `Bearer ${user.token}`
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
            // setPostedBy('')
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
            
            {/* <input type="hidden" name="_id" value={user.postedBy} /> */}

            <button className="btn">Add Tutorial</button>
            {error && <div className="error">{error}</div>}

        </form>
    )
}

export default TutorialForm;