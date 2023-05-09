import { redirect } from 'react-router-dom';
import {useTutorialContext} from '../hooks/useTutorialContext';


const TutorialDetails = ({tutorial}) => {
    const {dispatch} = useTutorialContext();
    const handleClick = async () => {
        // const token = localStorage.getItem('authToken');
        // if (!token){
        //     return redirect("/login");
        // }
        const response = await fetch('/api/tutorials/' + tutorial._id, {
            method: 'DELETE'
        });
        const json = await response.json();

        if (response.ok){
            dispatch({type: 'DELETE_TUTORIAL', payload: json})
        }
    }
    const image = `http://localhost:4000/static/${tutorial.filename}`
    console.log(tutorial.filename, "hejehj")

    
    
    return(
        
        <div className="tutorialDetails">
            <img src={image} />
            
            <h2>{tutorial.title}
            <i onClick={handleClick} id="delBtn" className=" fa-solid fa-trash-can "></i>
            
            </h2>
            <h3>{tutorial.stepsTitle}</h3>
            <p>{tutorial.steps}</p>
            
        </div>
        
    )
}

export default TutorialDetails;