const GithubReducer = (state, action) => {
    switch (action.type) {
        case 'USERDATA_SEARCH':
            return {
                ...state,
                users: [...action.payload]
            };
        case 'USERDATA_DELETE':
            return {
                ...state,
                users: []
            }
        default:
            return state;
    }
};

export default GithubReducer;
