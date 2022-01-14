import { useEffect, useContext } from "react";
import { FaArrowLeft, FaCodepen, FaUsers, FaUserFriends } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

import GithubContext from "../../context/github/GithubContext";
function User() {
    const params = useParams();
    const { getUser, user } = useContext(GithubContext);

    useEffect(() => {
        getUser(params.login)
    }, [])
    const { avatar_url, name, login, bio, blog, followers, following, hireable, html_url, location, public_repos, type, twitter_username } = user;
    return (
        <>
            <Link to="/" className="">
                <button className="btn btn-ghost mb-8 mx-16">
                    <FaArrowLeft className="font-bold place-self-center mr-2" />
                    Back to search
                </button>
            </Link>
            <div className="grid grid-cols-1 md:grid-cols-4 mb-8 gap-4 w-full">
                <div className="avatar md:col-span-1 pl-4 ">
                    <div className="md:mb-8 rounded-btn relative">
                        <img src={avatar_url} alt="profile" />
                        <div className="absolute w-full h-full bg-black top-0 left-0 bg-opacity-30 p-2">
                            <div className="absolute bottom-5">
                                <h1 className="px-1 text-lg font-extrabold">{name}</h1>
                                <h1 className="px-1 text-sm font-bold">{login}</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero md:col-start-2 md:col-end-5 justify-start">
                    <div className="flex-col hero-content lg:flex-row-reverse">
                        <div>
                            <h1 className="mb-5 text-xl font-bold">
                                {name}
                                <div className="ml-2 badge badge-accent badge-outline badge-lg">{type}</div>
                                {hireable && <div className="ml-2 badge badge-accent badge-outline badge-lg">Hireable</div>}
                            </h1>

                            <p className="mb-5">
                                {bio}
                            </p>
                            <a href={html_url} target="_blank" rel="noreferrer">
                                <button className="btn btn-outline">Visit Github Profile</button>
                            </a>
                            <div className="w-full shadow stats">
                                <div className="stat">
                                    <div className="stat-title">Location</div>
                                    <div className="stat-value text-2xl">{location}</div>
                                </div>
                                <div className="stat">
                                    <div className="stat-title">Website</div>
                                    <div className="stat-value text-2xl"><a href={`http://${blog}`} target="_blank">{blog}</a></div>
                                </div>
                                {twitter_username != null && <div className="stat">
                                    <div className="stat-title">Twitter</div>
                                    <div className="stat-value text-2xl"><a href={`https://twitter.com/${twitter_username}`} target="_blank">{twitter_username}</a></div>
                                </div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full px-16">
                <div className="w-full shadow stats">
                    <div className="stat">
                        <div className="stat-figure text-accent">
                            <FaUsers className="text-5xl" />
                        </div>
                        <div className="stat-title">Followers</div>
                        <div className="stat-value">{followers}</div>
                    </div>
                    <div className="stat">
                        <div className="stat-figure text-accent">
                            <FaUserFriends className="text-5xl" />
                        </div>
                        <div className="stat-title">Following</div>
                        <div className="stat-value">{following}</div>
                    </div>
                    <div className="stat">
                        <div className="stat-figure text-accent">
                            <FaCodepen className="text-5xl" />
                        </div>
                        <div className="stat-title">Public Repos</div>
                        <div className="stat-value">{public_repos}</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default User;
