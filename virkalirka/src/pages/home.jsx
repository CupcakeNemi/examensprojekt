import { useEffect} from "react";

import { Link } from "react-router-dom";


import { useTutorialContext } from "../hooks/useTutorialContext";
import '../index.css'

import TutorialDetails from "../components/TutorialDetails";
import TutorialForm from "../components/TutorialForm";
import URL from "../backendUrl";


const Home = () => {
    const {tutorials, dispatch} = useTutorialContext();

    useEffect(() => {
        const fetchTutorials = async () => {

            const response = await fetch (`${URL}/api/tutorials`);

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
            <button><Link to="/createTutorial">Create Tutorial</Link></button>
            <TutorialForm/>
        </div>
        

    )
}

export default Home;