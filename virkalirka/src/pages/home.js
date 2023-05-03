import { useEffect} from "react";
import { useTutorialContext } from "../hooks/useTutorialContext";
import '../main.css'

import TutorialDetails from "../components/TutorialDetails";
import TutorialForm from "../components/TutorialForm";

const Home = () => {
    const {tutorials, dispatch} = useTutorialContext();

    useEffect(() => {
        const fetchTutorials = async () => {
            const response = await fetch ('/api/tutorials');
            const json = await response.json();

            if (response.ok) {
                dispatch({type: 'SET_TUTORIALS', payload: json})
            }
        }
        fetchTutorials()
    }, [dispatch])
    return (
        <div className="home">
            <div className="tutorials">
                {tutorials && tutorials.map((tutorial => (
                    <TutorialDetails key={tutorial._id} tutorial={tutorial} />
                )))}
            </div>
            <TutorialForm/>
        </div>
    )
}

export default Home;