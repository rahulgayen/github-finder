import { Link } from 'react-router-dom'
import { FaGithub } from "react-icons/fa"
function Navbar({ title }) {
    return (
        <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content flex px-4">
            <div className="flex-grow ">
                <FaGithub className="text-2xl" />
                <Link className="pl-4 text-lg" to="/" >{title}</Link>
            </div>
            <div className="flex-grow-0 flex justify-evenly gap-2">
                <Link className="btn btn-ghost btn-sm rounded-btn" to="/" >Home</Link>
                <Link className="btn btn-ghost btn-sm rounded-btn" to="/about" >About</Link>
            </div>
        </nav>
    )
}

Navbar.defaultProps = { title: "Github Finder" }
export default Navbar
