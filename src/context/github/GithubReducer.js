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
            };
        case 'USER_GET':
            return {
                ...state,
                user: { ...action.payload }
            };
        case 'USER_REPO_GET':
            return {
                ...state,
                repos: [...action.payload]
            };
        case 'USER_DELETE':
            return {
                ...state,
                user: {},
                repos: []
            }
        default:
            return state;
    }
};

export default GithubReducer;
