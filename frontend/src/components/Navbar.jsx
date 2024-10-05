import "/src/style/navbar.css"
import { Link } from "react-router-dom"
function NavBar() {
    return (
    <header className="navBar">
        <div className="logo">
            <Link to="/">Beyond Class</Link>
        </div>
        <ul className="navLinks">
            <li>
                <Link to="/demo">Demo</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
            <li>
                <div>
                    <Link to="/signup"><span className="animated secondRow">Sign up</span></Link>
                </div>
            </li>
        </ul>
        
    </header>
    )
}

export default NavBar