import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';

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

  // Render the tutorial details
return (
    <div>
    <h2>{tutorial.title}</h2>
      {/* Render other tutorial details */}
    </div>
);
};

export default TutorialPage;