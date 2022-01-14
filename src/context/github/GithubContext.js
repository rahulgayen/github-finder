import { createContext, useReducer, useState } from "react";
import axios from 'axios';

import GithubReducer from "./GithubReducer";

const GithubContext = createContext();
const Github_URL = process.env.REACT_APP_GITHUB_URL;
const Github_Token = process.env.REACT_APP_GITHUB_TOKEN;

const api_config = {
    method: 'get',
    url: `${Github_URL}/search/users?q=`,
    headers: { 'Authorization': Github_Token }
};

export const GithubProvider = ({ children }) => {
    const initialState = {
        users: [],
        user: {}
    }
    const [searchInput, setSearchInput] = useState("")
    const [state, dispatch] = useReducer(GithubReducer, initialState);

    const setInput = (userInput) => {
        setSearchInput(userInput);
        api_config.url = `${Github_URL}/search/users?q=${userInput}`;
    }

    const searchUsers = async () => {
        let userData = await axios(api_config);
        dispatch({ type: 'USERDATA_SEARCH', payload: userData.data.items });
    }
    const clearUsers = () => {
        dispatch({ type: 'USERDATA_DELETE' });
    }
    return (
        <GithubContext.Provider value={{ users: state.users, user: state.user, setInput, searchUsers, clearUsers }}>
            {children}
        </GithubContext.Provider>
    )
}

export default GithubContext;