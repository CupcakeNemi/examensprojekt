import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
import URL from '../backendURL';

const TutorialPage = () => {
    const { id } = useParams(); // Retrieve the tutorial tutorialId from URL parameters
    const [tutorial, setTutorial] = useState(null);
    const { user } = useAuthContext();

    useEffect(() => {
        const fetchTutorial = async () => {
            try {
                const response = await fetch(`${URL}/api/tutorials/${id}`, {
                    headers: {
                        'Authorization': `Bearer ${user.token}`
                    }
                });
                const tutorialData = await response.json();
                setTutorial(tutorialData);
            } catch (error) {
                console.error(error);
            }
        };

        fetchTutorial();
    }, [id, user.token]);

    if (!tutorial) {
        return <div>Loading tutorial...</div>;
    }
    const image = `${URL}/static/${tutorial.filename}`;
    // Render the tutorial details
    return (
        <div className='flexDiv'>
        <div className='tutorial'>
            <img src={image} alt="of the project" className='tutorial-img' />
            <h2>{tutorial.title}</h2>
            <small>{tutorial.difficulty}</small>
            <h3>{tutorial.stepsTitle[0]}</h3>
            <p>{tutorial.steps[0]}</p>
            <h3>{tutorial.stepsTitle[1]}</h3>
            <p>{tutorial.steps[1]}</p>
            <h3>{tutorial.stepsTitle[2]}</h3>
            <p>{tutorial.steps[2]}</p>
            <h3>{tutorial.stepsTitle[3]}</h3>
            <p>{tutorial.steps[3]}</p>
            <h3>{tutorial.stepsTitle[4]}</h3>
            <p>{tutorial.steps[4]}</p>
            <h3>{tutorial.stepsTitle[5]}</h3>
            <p>{tutorial.steps[5]}</p>
            <h3>{tutorial.stepsTitle[6]}</h3>
            <p>{tutorial.steps[6]}</p>
            <h3>{tutorial.stepsTitle[7]}</h3>
            <p>{tutorial.steps[7]}</p>
            <h3>{tutorial.stepsTitle[8]}</h3>
            <p>{tutorial.steps[8]}</p>
            <h3>{tutorial.stepsTitle[9]}</h3>
            <p>{tutorial.steps[9]}</p>
            <h3>{tutorial.stepsTitle[10]}</h3>
            <p>{tutorial.steps[10]}</p>

        </div>
        </div>
    );
};

export default TutorialPage;