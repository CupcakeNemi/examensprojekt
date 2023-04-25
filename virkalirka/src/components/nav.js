import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <header>
            <div className="navContainer">
            <Link to="/">
                <h1>VirkaLirka Nav</h1>
            </Link>

            </div>
        </header>
    )
}

export default Nav;