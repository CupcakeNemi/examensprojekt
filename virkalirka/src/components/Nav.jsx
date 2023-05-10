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
                    <p className="navPages">Home</p>
                </Link>
                <nav>
                    {user && (
                        <div>
                            <span id="user">{user.username}</span>
                            <button onClick={handleClick} id="logoutBtn">Log out</button>
                        </div>
                    )}
                    {!user && (
                        <div className="link">
                            <div className="login">
                                <Link to="/login">Login</Link>
                            </div>
                            <div className="signup">
                                <Link to="/signup">Signup</Link>
                            </div>
                        </div>
                    )}
                </nav>
            </div>
        </header>
    )
}

export default Nav;