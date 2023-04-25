import { useEffect, useState } from "react";

import TutorialDetails from "../components/TutorialDetails";

const Home = () => {
    const [tutorials, setTutorials] = useState(null);
    useEffect(() => {
        const fetchTutorials = async () => {
            const response = await fetch ('/api/tutorials');
            const json = await response.json();

            if (response.ok) {
                setTutorials(json);
            }
        }
        fetchTutorials()
    }, [])
    return (
        <div className="home">
            <div className="tutorials">
                {tutorials && tutorials.map((tutorial => (
                    <TutorialDetails tutorial={tutorial} key={tutorial._id}/>
                )))}
            </div>
        </div>
    )
}

export default Home;