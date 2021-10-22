//.common para seleccionar las propiedades del header
import React, { useReducer } from 'react'
import axiosClient from '../../config/axios'
import UsersContext from "./UsersContext"
import UsersReducer from "./UsersReducer"

const UsersState = (props) => {
    const initialState = {
        user: {
            _id: "",
            username: "",
            email: "",
        },
        authStatus: false
    }
    const [globalState, dispatch] = useReducer(UsersReducer, initialState)
    //create user
    const registerUser = async (dataForm) => {
        console.log(dataForm)
        try {
            const res = await axiosClient.post("/api/users/create", dataForm)
            // keep token en local 
            const token = res.data.data.token
            dispatch({
                type: "CREATE_USER_OK",
                payload: token
            })
        } catch (error) {
            console.log(error)
        }
    }

    //login
    const loginUser = async (dataForm) => {
        try {
            const res = await axiosClient.post("/api/auth/login", dataForm)
            const token = res.data.data.token
            dispatch({
                type: "INICIO_SESION_EXITOSO",
                payload: token
            })
        } catch (error) {
            console.log(error)
        }
    }

    //confirmar crdeenciales
    const tokenVerification = async () => {
        //get token
        const token = localStorage.getItem("token")
        if (!token) {
            console.log("Borrando Token de los headers")
            delete axiosClient.defaults.headers.common["x-auth-token"] //clear petición
        }
        //token en headers
        //.common para seleccionar las propiedades del header
        axiosClient.defaults.headers.common["x-auth-token"] = token
        //petición
        try {
            const res = await axiosClient.get("/api/auth/verifying-token")
            const currentUser = res.data.data.user
            dispatch({
                type: "GET_USER",
                payload: currentUser
            })
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }

    //cerrar sesión
    const logoutUser = async () => {
        dispatch({
            type: "LOGOUT"
        })
    }
    return (
        <UsersContext.Provider
            value={{
                user: globalState.user,
                authStatus: globalState.authStatus,
                registerUser,
                loginUser,
                tokenVerification,
                logoutUser
            }}
        >
            {props.children}
        </UsersContext.Provider>
    )
}

export default UsersState