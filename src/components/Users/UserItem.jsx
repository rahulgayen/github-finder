import { Link } from "react-router-dom";
function UserItem({ login, avatar_url }) {
    return (
        <div className="flex z-10 shadow-xl gap-2 p-4 rounded-lg transition-transform duration-75 ease-in hover:scale-110 hover:z-20 hover:shadow-md ">
            <div className="avatar">
                <div className="rounded-full w-10 h-10">
                    <img src={avatar_url} alt="Profile" />
                </div>
            </div>
            <div className="flex flex-col justify-center items-start px-2">
                <h1 className="px-1 text-lg font-semibold">{login}</h1>
                <Link to={`/user/${login}`}>
                    <p className="cursor-pointer hover:bg-gray-500 rounded-md px-1 text-xs opacity-40">View Profile</p>
                </Link>
            </div>
        </div>
    );
}

export default UserItem;

/*
  
<div className="card shadow-lg compact side bg-base-100">
            <div className="flex-row items-center space-x-4 card-body">
                <div>
                    <div className="avatar">
                        <div className="rounded-full w-14 h-14 shadow">
                            <img src={avatar_url} alt="Profile" />
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="card-title">{login}</h2>
                    <Link to={`/user/${login}`}><p className="px-1 w-max-content text-opacity-40 ">View Profile</p></Link>
                </div>
            </div>
        </div>
*/
