import {useTutorialContext} from '../hooks/useTutorialContext';
import {useState} from 'react';
import URL from '../backendURL';
import { useAuthContext } from '../hooks/useAuthContext';

const UserPageCom = ({tutorial}) => {
    const {dispatch} = useTutorialContext();
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('user'));
    const {user} = useAuthContext();
    const loggedInUserId = localStorage.getItem('user') && JSON.parse(localStorage.getItem('user'))._id;
    // console.log(tutorial, "TUTORIAL")

    const handleClick = async () => {
        const response = await fetch(`${URL}/api/tutorials/` + tutorial._id, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${user.token}`
                }
        });
        const json = await response.json();

        if (response.ok){
            dispatch({type: 'DELETE_TUTORIAL', payload: json})
        }
    }

    const image = `${URL}/static/${tutorial.filename}`;

    return(
        // <h1>hej</h1>
        
        <div className='flexDiv'>
            

        <div className="tutorialDetails">
            <img src={image} alt="of the project" className='content-img'/> 
            <h2>{tutorial.title}
            {/* {loggedInUserId === tutorial.postedBy && isLoggedIn && <i onClick={handleClick} id="delBtn" className=" fa-solid fa-trash-can "></i>} */}
            {isLoggedIn && <i onClick={handleClick} id="delBtn" className=" fa-solid fa-trash-can "></i>}
            </h2>
            <h3>{tutorial.stepsTitle}</h3>
            <p>{tutorial.steps}</p> 
            <small className='postedBy'>{tutorial.postedBy}</small>
            
        </div>
        </div> 
        
    )
}

export default UserPageCom;
