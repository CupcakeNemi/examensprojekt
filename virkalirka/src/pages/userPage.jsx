import { useEffect, useState} from "react";
import { useTutorialContext } from "../hooks/useTutorialContext";
import '../index.css'

import URL from "../backendURL";
import UserPageCom from "../components/UserPageCom";
import { useAuthContext } from "../hooks/useAuthContext";


const UserPage = () => {
    
    const {tutorials, dispatch} = useTutorialContext();
    const [userId, setUserId] = useState(localStorage.getItem('user')?.id);
    const { user } = useAuthContext();

    useEffect(() => {
        const fetchTutorials = async () => {

            const response = await fetch (`${URL}/api/tutorials/usertutorials`,{
                method: 'GET',
                headers: {
                'Authorization': `Bearer ${user.token}`
                }
                });

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
            <div>
                <h4>Saved tutorials</h4>
                
            </div>
            <div className="tutorials">
                {userTutorials && userTutorials.map((tutorial => (
                    <UserPageCom key={tutorial._id} tutorial={tutorial} />
                )))}
            </div>

        </div>
        
    )
}

export default UserPage;