// import { useTutorialContext } from '../hooks/useTutorialContext';
// import { useState } from 'react';
// import URL from '../backendURL';
// import { useAuthContext } from '../hooks/useAuthContext';

// const UserPageCom = ({ tutorial }) => {
//     const { dispatch } = useTutorialContext();
//     const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('user'));
//     const { user } = useAuthContext();

//     const loggedInUserId = user ? user._id : null;

//     const handleClick = async () => {
//         if (loggedInUserId === tutorial.postedBy) {
//             const response = await fetch(`${URL}/api/tutorials/` + tutorial._id, {
//                 method: 'DELETE',
//                 headers: {
//                     'Authorization': `Bearer ${user.token}`
//                 }
//             });
//             const json = await response.json();

//             if (response.ok) {
//                 dispatch({ type: 'DELETE_TUTORIAL', payload: json });
//             }
//         } else {
//             // User is not authorized to delete the tutorial
//             // Handle the unauthorized deletion attempt (e.g., show an error message)
//         }
//     }

//     const image = `${URL}/static/${tutorial.filename}`;

//     return (
//         <div className="tutorials">
//             <img src={image} alt="of the project" />
//             <h2>
//                 {tutorial.title}
//                 {isLoggedIn && loggedInUserId === tutorial.postedBy && (
//                     <i onClick={handleClick} id="delBtn" className=" fa-solid fa-trash-can "></i>
//                 )}
//             </h2>
//             <h3>{tutorial.stepsTitle}</h3>
//             <p>{tutorial.steps}</p>
//             <small>{tutorial.postedBy}</small>
//         </div>
//     );
// }

// export default UserPageCom;