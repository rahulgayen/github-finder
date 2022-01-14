import { createContext, useReducer, useState } from "react";
import axios from "axios";

import GithubReducer from "./GithubReducer";

const GithubContext = createContext();
const Github_URL = process.env.REACT_APP_GITHUB_URL;
const Github_Token = process.env.REACT_APP_GITHUB_TOKEN;

const api_config = {
    method: "get",
    headers: { Authorization: Github_Token },
};

export const GithubProvider = ({ children }) => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
    };
    const [searchInput, setSearchInput] = useState("");
    const [state, dispatch] = useReducer(GithubReducer, initialState);

    const setInput = (userInput) => {
        setSearchInput(userInput);
        api_config.url = `${Github_URL}/search/users?q=${userInput}`;
    };
    const searchUsers = async () => {
        let userData = await axios(api_config);
        dispatch({ type: "USERDATA_SEARCH", payload: userData.data.items });
    };
    const clearUsers = () => {
        dispatch({ type: "USERDATA_DELETE" });
    };
    const getUser = async (login) => {
        api_config.url = `${Github_URL}/users/${login}`;
        let userData = await axios(api_config);
        dispatch({ type: "USER_GET", payload: userData.data });
    };

    const getUserRepos = async (login) => {
        api_config.url = `${Github_URL}/users/${login}/repos?sort=created&per_page=10`;
        let repo = await axios(api_config);
        dispatch({ type: "USER_REPO_GET", payload: repo.data });
    };

    const clearUser = () => {
        dispatch({ type: "USER_DELETE" });
    };

    return (
        <GithubContext.Provider value={{ users: state.users, user: state.user, repos: state.repos, setInput, searchUsers, clearUsers, getUser, getUserRepos, clearUser }}>
            {children}
        </GithubContext.Provider>
    );
};

export default GithubContext;
