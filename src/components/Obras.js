import React, { useContext, useEffect } from 'react'
import ObrasContext from './../context/Obras/ObrasContext'
import { Link } from 'react-router-dom'
import ClipLoader from "react-spinners/ClipLoader";

export default function Pets() {
    //Edo. global
    const ctxObras = useContext(ObrasContext)
    const {
        obras,
        getAllObras
    } = ctxObras
    useEffect(() => {
        getAllObras()
    }, [])

    return (
        <>
            <div class="bg-blueGray-50">
                <div class="max-w-7xl mx-auto overflow-hidden sm:px-6 lg:px-8">
                    <h2 class="sr-only">OBRAS</h2>
                    <div class="-mx-px border-l border-gray-200 grid grid-cols-2 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
                        {/* PRODUCTO */}
                        {
                            obras.length === 0 ?
                                <ClipLoader />
                                :
                                obras.map(e => {
                                    return (
                                        <>
                                            <div class="group relative p-4 border-r border-b border-gray-200 sm:p-6">
                                                <div class="rounded-lg bg-gray-200 aspect-w-1 aspect-h-1 group-hover:opacity-75">
                                                    <img src={e.picturesUrl} alt="Foto de obra" class="w-full h-full object-center object-cover" />
                                                </div>
                                                <div class="pt-10 pb-4 text-center">
                                                    <h3 class="text-xl  font-medium text-gray-900 mb-10">
                                                        <Link to={`/obras/${e._id}`}>
                                                            <span aria-hidden="true" class="absolute inset-0"></span>
                                                            {e.name}
                                                        </Link>
                                                    </h3>

                                                    <Link to={`/obras/${e._id}`}>
                                                        <button type="button" class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-cerulean hover:bg-turquoise focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-turquoise">
                                                            Ver obra
                                                        </button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}