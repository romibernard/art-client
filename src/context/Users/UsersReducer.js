const reducer = (globalState, action) => {
    switch (action.type) {
        case "GET_USER":
            return {
                ...globalState,
                authStatus: true,
                user: action.payload
            }
        case "ADD_USER":
            return {
                ...globalState,
                user: [...globalState.USER, action.payload],
            };
        case "INICIO_SESION_EXITOSO": //ok
        case "CREATE_USER_OK":  //ok
            localStorage.setItem("token", action.payload)
            return {
                ...globalState,
                authStatus: true
            }
        case "LOGOUT":
            localStorage.removeItem("token")
            return {
                ...globalState,
                user: null,
                authStatus: null
            }
        default:
            return globalState
    }
}

export default reducer