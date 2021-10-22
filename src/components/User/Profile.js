import React, { useContext } from 'react'
import UsersContext from './../../context/Users/UsersContext'
import { Link } from 'react-router-dom';

export default function Profile() {
    const ctxUser = useContext(UsersContext)
    const { user, authStatus, logoutUser } = ctxUser

    return (
        <>
            <div>
                <div class="-mt-px flex divide-x divide-gray-200">
                    <div class="-ml-px w-0 flex-1 flex">
                        <span class="ml-3">Mi perfil</span>
                        <body>
                            <div>
                                {authStatus && (user.role === 0) ? (
                                    <Link
                                        to="/obras/crear"
                                        class="text-base font-medium text-cerulean hover:text-sky-700"
                                    >
                                        Crear obra
                                    </Link>
                                ) : (
                                    ""
                                )}

                            </div>
                        </body>
                    </div>
                </div>
            </div>
        </>
    )
}