import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {login, error, isLoading} =useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault()
        await login(username,password);
    }

    return(

    <form className="loginForm" onSubmit={handleSubmit}>
        <h3>Log in</h3>
        <input 
            type="text" 
            onChange={(e) => setUsername(e.target.value)} 
            value={username} 
            placeholder="Username"
            className="formInput"
        />
        <input 
            type="password" 
            onChange={(e) => setPassword(e.target.value)} 
            value={password} 
            placeholder="Password"
            className="formInput"
        />
        <button disabled={isLoading} className="btn">Log in</button>
        {error && <div className="error">{error}</div>}
    </form>
    )
}

export default Login;