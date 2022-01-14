import { FaArrowLeft } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
function User() {
    const params = useParams();
    console.log(params);
    return (
        <>
            <Link to="/" className="">
                <button className="btn btn-ghost mb-8">
                    <FaArrowLeft className="font-bold place-self-center mr-2" />
                    Back to search
                </button>
            </Link>
            <div className="grid grid-cols-1 md:grid-cols-4 mx-16 gap-4">
                <div className="avatar pl-4">
                    <div className="md:mb-8 rounded-btn relative">
                        <img src="https://avatars.githubusercontent.com/u/6478855?v=4" />
                        <div className="absolute w-full h-full bg-black top-0 left-0 bg-opacity-30 p-2">
                            <div className="absolute bottom-5">
                                <h1 className="px-1 text-lg font-extrabold">gdgAtrdgayee</h1>
                                <h1 className="px-1 text-sm font-bold">dgdgatrayee99</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero col-span-2">
                    <div className="flex-col hero-content lg:flex-row-reverse">
                        <div>
                            <h1 className="mb-5 text-xl font-bold">
                                Atrayee
                                <div className="ml-2 badge badge-accent badge-outline badge-lg">User</div>
                                <div className="ml-2 badge badge-accent badge-outline badge-lg">Hireable</div>
                            </h1>

                            <p className="mb-5">
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                            </p>
                            <button className="btn btn-outline">Visit Github Profile</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default User;
