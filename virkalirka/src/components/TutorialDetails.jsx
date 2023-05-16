import {useTutorialContext} from '../hooks/useTutorialContext';
import {useState} from 'react';
import URL from '../backendURL';
import { useAuthContext } from '../hooks/useAuthContext';



const TutorialDetails = ({tutorial}) => {
    const {dispatch} = useTutorialContext();
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('user'));
    const {user} = useAuthContext();

    // const loggedInUserId = localStorage.getItem('user') && JSON.parse(localStorage.getItem('user'))._id;

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

            <img src={image} alt="of the project"/>
            
            <h2>{tutorial.title}
            {/* {loggedInUserId === tutorial.creator && isLoggedIn && <i onClick={handleClick} id="delBtn" className=" fa-solid fa-trash-can "></i>} */}
            {isLoggedIn && <i onClick={handleClick} id="delBtn" className=" fa-solid fa-trash-can "></i>}
            
            </h2>
            <h3>{tutorial.stepsTitle}</h3>
            <p>{tutorial.steps}</p>
            <small>{tutorial.postedBy}</small>

            
        </div>
        
    )
}

export default TutorialDetails;