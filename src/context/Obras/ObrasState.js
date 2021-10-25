import React, { useReducer, useState } from 'react'
import ObrasContext from './ObrasContext'
import ObrasReducer from './ObrasReducer'
import axiosClient from './../../config/axios'

const ObrasState = (props) => {

    const initialState = {
        obras: []
    }

    const [globalState, dispatch] = useReducer(ObrasReducer, initialState)

    
    const getAllObras = async () => {
        try {
            const res = await axiosClient.get("/api/obras/get-all")
            const obrasDB = res.data.data
            dispatch({
                type: "GET_OBRAS",
                payload: obrasDB
            })
        } catch (error) {
            console.log(error)
        }
    }
    const addObra = async (dataForm) => {
        console.log(dataForm)
        try {
            await axiosClient.post("/api/obras/create", dataForm)
            return getAllObras()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <ObrasContext.Provider
            value={{
                obras: globalState.obras,
                getAllObras,
                addObra
            }}
        >
            {props.children}
        </ObrasContext.Provider>
    )
}

export default ObrasState