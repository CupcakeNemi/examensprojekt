import { useTutorialContext } from '../hooks/useTutorialContext';
import { useState } from 'react';
import URL from '../backendURL';
import { useAuthContext } from '../hooks/useAuthContext';



const TutorialDetails = ({ tutorial }) => {
    const { dispatch } = useTutorialContext();
    const { user } = useAuthContext();
    const [liked, setLiked] = useState(false);
    const image = `${URL}/static/${tutorial.filename}`;
    const [selectedTutorial, setSelectedTutorial] = useState(null);
    const _id = tutorial._id

    const handleClick = async () => {
        try {
            const response = await fetch(`${URL}/api/tutorials/${tutorial._id}`, {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            });
            const tutorialData = response.data;
            setSelectedTutorial(tutorialData);
            console.log(tutorialData, "klick")
        } catch (error) {
            console.error(error);
        }

    };

    const likePost = () => {
        fetch(`${URL}/like/save`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application",
                'Authorization': `Bearer ${user.token}`
            },
            body: JSON.stringify({
                tutorialId: _id
            })
        }). then(res=>res.json())
        .then(result=>{
            console.log(result, "resultat")
        })
    }

    return (
        <div className='flexDiv'>
            <div className="tutorialDetails">

                <img src={image} alt="of the project" className='content-img' />
                <h2>{tutorial.title}</h2>
                <div>
                    <small className='difficulty'>{tutorial.difficulty}</small>
                </div>
                <div>
                    {/* <small className='postedBy'>{tutorial.postedBy}</small> */}
                </div>
                {/* <i onClick={handleLike} className="fa-regular fa-heart"></i>
                <i className="fa-solid fa-heart"></i> */}
                <i onClick={() => likePost(tutorial._id)} className={`fa-regular fa-heart${liked ? ' liked' : ''}`}></i>
                <i className={`fa-solid fa-heart${liked ? ' liked' : ''}`}></i>
                <button onClick={handleClick}>Load Tutorial</button>


            </div>

        </div>

    )
}

export default TutorialDetails;