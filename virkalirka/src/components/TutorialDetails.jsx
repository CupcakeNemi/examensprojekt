
import {useTutorialContext} from '../hooks/useTutorialContext';
import {useState} from 'react';
import URL from '../backendURL';



const TutorialDetails = ({tutorial}) => {
    const {dispatch} = useTutorialContext();
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('user'));
    const handleClick = async () => {

        const response = await fetch(`${URL}/api/tutorials/` + tutorial._id, {
            method: 'DELETE'
        });
        const json = await response.json();

        if (response.ok){
            dispatch({type: 'DELETE_TUTORIAL', payload: json})
        }
    }
    const image = `${URL}/static/${tutorial.filename}`;
    console.log('isLoggedIn:', isLoggedIn);
    console.log("local storage auth token",localStorage.getItem('user'));

    return(
        
        <div className="tutorialDetails">
            <img src={image} alt="Image of the project"/>
            
            <h2>{tutorial.title}
            {isLoggedIn && <i onClick={handleClick} id="delBtn" className=" fa-solid fa-trash-can "></i>}
            {/* <i onClick={handleClick} id="delBtn" className=" fa-solid fa-trash-can "></i> */}
            
            </h2>
            <h3>{tutorial.stepsTitle}</h3>
            <p>{tutorial.steps}</p>
            
        </div>
        
    )
}

export default TutorialDetails;