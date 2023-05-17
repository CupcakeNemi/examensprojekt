// import { useEffect, useState} from "react";
// import { useTutorialContext } from "../hooks/useTutorialContext";
// import '../index.css'

// import URL from "../backendURL";
// import UserPageCom from "../components/userPageCom";


// const UserPage = () => {
//     const {tutorials, dispatch} = useTutorialContext();
//     const [userId, setUserId] = useState(localStorage.getItem('user')?.id);

//     useEffect(() => {
//         const fetchTutorials = async () => {

//             const response = await fetch (`${URL}/api/tutorial`);

//             const json = await response.json();

//             if (response.ok) {
//                 dispatch({type: 'SET_TUTORIALS', payload: json})
//             }
//         }
//         fetchTutorials()
//     }, [dispatch])
//     const userTutorials = tutorials.filter(tutorial => tutorial.creator === userId);
//     return (
//         <div className="userPage">
//             <div className="tutorials">
//                 {userTutorials.map((tutorial => (
//                     <UserPageCom key={tutorial._id} tutorial={tutorial} />
//                 )))}
//             </div>
//             <UserPageCom/>
//         </div>
        
//     )
// }

// export default UserPage;