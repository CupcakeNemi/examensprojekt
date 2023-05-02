import { useState } from "react"

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(username,password)
    }

    return(
    <form className="loginForm" onSubmit={handleSubmit}>
        <h3>Log in</h3>
        <input 
            type="text" 
            onChange={(e) => setUsername(e.target.value)} 
            value={username} 
            placeholder="Username"
        />
        <input 
            type="password" 
            onChange={(e) => setPassword(e.target.value)} 
            value={password} 
            placeholder="Password"
        />
        <button>Log in</button>
    </form>
    )
}

export default Login;