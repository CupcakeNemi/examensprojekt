import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";

const Nav = () => {
    const {logout} = useLogout();
    const handleClick = () => {
        logout()
    }
    return (
        <header>
            <div className="navContainer">
            <Link to="/">
                <h1>VirkaLirka Nav</h1>
            </Link>
        <nav>
            <div><button onClick={handleClick}>Log out</button></div>
            <div>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
            </div>
        </nav>
            </div>
        </header>
    )
}

export default Nav;