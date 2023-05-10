import { useEffect, useState} from "react";
import { useTutorialContext } from "../hooks/useTutorialContext";
import '../index.css'


import TutorialDetails from "../components/TutorialDetails";
import TutorialForm from "../components/TutorialForm";
import URL from "../backendURL";

const UserPage = () => {
    const {tutorials, dispatch} = useTutorialContext();
    const [userId, setUserId] = useState(localStorage.getItem('user')?.id);

    useEffect(() => {
        const fetchTutorials = async () => {
            const response = await fetch (`${URL}/api/tutorial`);
            const json = await response.json();

            if (response.ok) {
                dispatch({type: 'SET_TUTORIALS', payload: json})
            }
        }
        fetchTutorials()
    }, [dispatch])
    const userTutorials = tutorials.filter(tutorial => tutorial.creator === userId);
    return (
        <div className="userPage">
            <div className="tutorials">
                {userTutorials.map((tutorial => (
                    <TutorialDetails key={tutorial._id} tutorial={tutorial} />
                )))}
            </div>
            <TutorialForm/>
        </div>
        
    )
}

export default UserPage;