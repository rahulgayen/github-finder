import { useState, useContext } from 'react'

import GithubContext from '../../context/github/GithubContext';
import AlertContext from '../../context/alert/AlertContext';

import Alert from "../layout/Alert"
function UserSearch() {
    const { users, setInput, searchUsers, clearUsers } = useContext(GithubContext);
    const { alertEvent, alertMessage } = useContext(AlertContext);
    const [userInput, setUserInput] = useState("");

    const handleChange = (event) => {
        setUserInput(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if (event.target.value === undefined || event.target.value.trim().length == 0)
            alertEvent({ msg: "Please enter something" })
        else {
            setInput(userInput);
            searchUsers();
            setUserInput('');
        }
    }
    return (
        <>
            {alertMessage.msg_status != "" && <Alert />}
            <div className="w-max flex justify-start flex-wrap md:flex-nowrap gap-2 px-8 mb-8 ">
                <div className="w-full place-self-center">
                    <form className="" onSubmit={handleSubmit}>
                        <input type="text" onChange={handleChange} value={userInput} placeholder="Search" className="rounded-l-lg px-2 pr-40 h-10 text-black" />
                        <button type="submit" className="rounded-lg rounded-l-none bg-neutral px-8 h-10">
                            GO
                        </button>
                    </form>
                </div>
                {users.length > 0 && (
                    <div className="">
                        <button className="btn btn-ghost" onClick={() => { clearUsers(); }}>Clear</button>
                    </div>
                )}
            </div>
        </>

    );
}

export default UserSearch;
