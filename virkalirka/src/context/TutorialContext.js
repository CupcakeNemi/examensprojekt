import { createContext, useReducer } from "react";

export const TutorialContext = createContext();
export const tutorialsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_TUTORIALS':
            return {
                tutorials: action.payload
            }
        case 'CREATE_TUTORIAL':
            return {
                tutorials: [action.payload, ...state.tutorials]
            }
            case 'DELETE_TUTORIAL': 
            return {
                tutorials: state.tutorials.filter((t) => t._id !== action.payload._id)
            }
        default:
            return state
    }
}

export const TutorialContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(tutorialsReducer, {
        tutorials: []
    });



    return (
        <TutorialContext.Provider value={{ ...state, dispatch }}>
            { children }
        </TutorialContext.Provider>
    )
}

