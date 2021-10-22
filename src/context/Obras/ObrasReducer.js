const reducer = (globalState, action) => {

    switch (action.type) {
        case "GET_OBRAS":
            return {
                ...globalState,
                obras: action.payload
            }
        case "ADD_OBRA":
            return {
                ...globalState,
                obras: [
                    ...globalState.obras,
                    action.payload//del ObrasState
                ]
            }
        default:
            return globalState
    }
}

export default reducer