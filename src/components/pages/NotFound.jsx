import { FaHome } from "react-icons/fa";
import { DiGithubAlt } from "react-icons/di";

import { Link } from "react-router-dom";
function NotFound() {
    return (
        <div>
            <div className="hero h-full">
                <div className="text-center hero-content">
                    <div className="max-w-md flex flex-col items-center justify-center">
                        <div className="mb-5 text-8xl font-bold flex">
                            <DiGithubAlt className="" />
                            Oops!
                        </div>
                        <p className="mb-5 text-5xl">404 - Page Not Found</p>

                        <Link to="/">
                            <button className="btn btn-primary">
                                <FaHome />
                                <span className="ml-2">Home</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NotFound;
