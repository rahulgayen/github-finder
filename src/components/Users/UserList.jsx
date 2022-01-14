import { useContext } from "react";

import GithubContext from "../../context/github/GithubContext";
import UserItem from "./UserItem"
function UserList() {
    const { users } = useContext(GithubContext);

    return (
        <div className="mx-auto w-11/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {users.map(({ id, login, avatar_url }) => {
                return <UserItem key={id} login={login} avatar_url={avatar_url} />
            })}
        </div>
    )
}

export default UserList
