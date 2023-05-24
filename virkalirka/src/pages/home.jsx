import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTutorialContext } from "../hooks/useTutorialContext";
import '../index.css'

import TutorialDetails from "../components/TutorialDetails";
import TutorialForm from "../components/TutorialForm";
import URL from "../backendURL";
import { useAuthContext } from "../hooks/useAuthContext";
import TutorialList from "../components/Sort.jsx";
import { useState } from "react";


const Home = () => {
    const { tutorials, dispatch } = useTutorialContext();
    const { user } = useAuthContext();

    useEffect(() => {
        const fetchTutorials = async () => {

            const response = await fetch(`${URL}/api/tutorials`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            });

            const json = await response.json();

            if (response.ok) {
                dispatch({ type: 'SET_TUTORIALS', payload: json })
            }
        }
        fetchTutorials()
    }, [dispatch])


    return (
        
        <div className="home">
            <TutorialList/>

            <div className="tutorials">
            {tutorials &&
                tutorials.map((tutorial) => (
                    <div key={tutorial._id}>
                        <TutorialDetails tutorial={tutorial} />
                        
                    </div>
                ))}
        </div>
            {/* <div className="tutorials">
                {tutorials && tutorials.map((tutorial => (
                    <TutorialDetails key={tutorial._id} tutorial={tutorial} />
                    
                    
                )))}
                
            </div> */}
            <button><Link to="/createTutorial">Create Tutorial</Link></button>
            
            <TutorialForm />
        </div>


    )
}

export default Home;