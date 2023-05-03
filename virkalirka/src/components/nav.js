import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import headerImg from '../images/crochetsquare.jpg';

const Nav = () => {
    const { logout } = useLogout();
    const { user } = useAuthContext()
    const handleClick = () => {
        logout()
    }
    return (
        <header>
            <div>
                <img src={headerImg} alt="bunny and pink penguin" id="header-img"/>
                <h1>Virkalirka</h1>
            </div>
            <div className="navContainer">
                <Link to="/">
                    <p>Home</p>
                </Link>
                <nav>
                    {user && (
                        <div>
                            <span>{user.username}</span>
                            <button onClick={handleClick}>Log out</button>
                        </div>
                    )}
                    {!user && (
                        <div>
                            <Link to="/login">Login</Link>
                            <Link to="/signup">Signup</Link>
                        </div>
                    )}
                </nav>
            </div>
        </header>
    )
}

export default Nav;