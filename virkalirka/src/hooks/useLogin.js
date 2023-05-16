import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from "./useAuthContext";
import URL from '../backendURL';

export const useLogin = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const {dispatch} = useAuthContext()
    const navigate = useNavigate();

    const login = async (username, password) => {
        setIsLoading(true);
        setError(null);

        const response = await fetch(`${URL}/api/user/login`, {
            method: 'POST', 
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username, password})
        })
        const json = await response.json();
        if (!response.ok){
            setIsLoading(false);
            setError(json.error);
        }
        if (response.ok) {
            // localstorage user
            localStorage.setItem('user', JSON.stringify(json));

            dispatch({type: 'LOGIN', payload: json});
            setIsLoading(false);
            navigate('/');
            
        }
    }
    return {login, isLoading, error,}
}
