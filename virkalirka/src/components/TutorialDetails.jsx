import { useTutorialContext } from '../hooks/useTutorialContext';
import { useState } from 'react';
import URL from '../backendURL';
import { useAuthContext } from '../hooks/useAuthContext';


const TutorialDetails = ({ tutorial }) => {
    const { dispatch } = useTutorialContext();
    const { user } = useAuthContext();

    const image = `${URL}/static/${tutorial.filename}`;

    return (
        <div className='flexDiv'>
            <div className="tutorialDetails">
                <img src={image} alt="of the project" className='content-img' />
                <h2>{tutorial.title}</h2>
                <small className='difficulty'>{tutorial.difficulty}</small>
                <small className='postedBy'>{tutorial.postedBy}</small>
                

            </div>
            
        </div>

    )
}

export default TutorialDetails;