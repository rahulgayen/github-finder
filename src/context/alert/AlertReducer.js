const AlertReducer = (state, action) => {
    switch (action.type) {
        case 'ALERT_ERROR':
            return {
                ...state,
                msg: action.payload.msg,
                msg_status: "ERROR"
            }
        case 'ALERT_DELETE':
            return {
                msg: "",
                msg_status: ""
            }
        default:
            return state;
    }
}

export default AlertReducer;