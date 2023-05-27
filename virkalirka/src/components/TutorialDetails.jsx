import { useTutorialContext } from '../hooks/useTutorialContext';
import { useEffect, useState } from 'react';
import URL from '../backendURL';
import { useAuthContext } from '../hooks/useAuthContext';
import { useNavigate } from 'react-router-dom';
import TutorialPage from './TutorialPage';
import { Link } from 'react-router-dom';

const TutorialDetails = ({ tutorial }) => {
    const { dispatch } = useTutorialContext();
    const { user } = useAuthContext();
    const [liked, setLiked] = useState(tutorial.likes.includes(user.user._id));
    const image = `${URL}/static/${tutorial.filename}`;
    const [selectedTutorial, setSelectedTutorial] = useState(null);
    const _id = tutorial._id
    const navigate = useNavigate();

    useEffect(() => {
        setLiked(tutorial.likes.includes(user.user._id))
    }, [tutorial.likes, user.user._id])

    // gå till en tutorial
    const handleClick = async () => {
        try {
            const response = await fetch(`${URL}/api/tutorials/${tutorial._id}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            });
            const tutorialData = response.data;
            setSelectedTutorial(tutorialData);
            

            navigate(`/tutorial/${tutorial._id}`);
        } catch (error) {
            console.error(error);
        }

    };

    const handleLike = async (id) => {
        const response = await fetch(`${URL}/api/tutorials/${id}/like`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${user.token}`
            },
            body: JSON.stringify({
                user_id: user.user._id
            })
        })
        if (response.ok) {
            const updatedTutorial = await response.json();
            dispatch({ type: 'EDIT_POST', payload: updatedTutorial });
        }
    }

    const handleLikeClick = async (tutorialId) => {
        await handleLike(tutorialId);
        
        setLiked(!liked);

    };

    return (
        <div className='flexDiv'>
            <div className="tutorialDetails">

                <img src={image} alt="of the project" className='content-img' />
                <h2>{tutorial.title}</h2>
                {/* <Link to={`/tutorial/${tutorial._id}`}>View Tutorial</Link> */}
                <div>
                    <small className='difficulty'>{tutorial.difficulty}</small>
                </div>
                
                <div>
                
                    {/* <small className='postedBy'>{tutorial.postedBy}</small> */}
                </div>
                {/* <i onClick={handleLike} className="fa-regular fa-heart"></i>
                <i className="fa-solid fa-heart"></i> */}
                <i onClick={() => handleLikeClick(tutorial._id)} className={liked ? 'fa-solid fa-heart' : 'fa-regular fa-heart'}></i>

                <button onClick={handleClick}>Load Tutorial</button>


            </div>

        </div>

    )
}

export default TutorialDetails;