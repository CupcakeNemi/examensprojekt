import {useTutorialContext} from '../hooks/useTutorialContext';

const contentImg = 'public/user/contentImg/'+user._id

const TutorialDetails = ({tutorial}) => {
    const {dispatch} = useTutorialContext();
    const handleClick = async () => {
        const response = await fetch('/api/tutorials/' + tutorial._id, {
            method: 'DELETE'
        });
        const json = await response.json();

        if (response.ok){
            dispatch({type: 'DELETE_TUTORIAL', payload: json})
        }
    }

    return(
        <div className="tutorialDetails">
            <h2>{tutorial.title}</h2>
            <h3>{tutorial.stepsTitle}</h3>
            <p>{tutorial.steps}</p>
            <span onClick={handleClick}>Delete</span>
        </div>
    )
}

export default TutorialDetails;