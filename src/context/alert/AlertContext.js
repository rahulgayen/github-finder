import { createContext, useReducer } from "react";
import AlertReducer from "./AlertReducer";

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
    const [alertMessage, dispatch] = useReducer(AlertReducer, { msg: "", msg_status: "" });

    const alertEvent = (alert_message) => {
        dispatch({ type: "ALERT_ERROR", payload: { msg: alert_message.msg } })
        setTimeout(() => {
            dispatch({ type: "ALERT_DELETE", payload: {} })
        }, 2000)
    }
    return (
        <AlertContext.Provider value={{ alertEvent, alertMessage }}>
            {children}
        </AlertContext.Provider>
    )
}

export default AlertContext;