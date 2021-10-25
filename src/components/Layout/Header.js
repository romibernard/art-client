import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import UsersContext from '../../context/Users/UsersContext'

export default function Header() {
    const ctxUser = useContext(UsersContext)
    const { user, authStatus, logoutUser } = ctxUser
    return (
        <>

            <header class="bg-sky">
                <nav class="max-w-8xl mx-auto px-0 sm:px-4 lg:px-8" aria-label="Top">
                    <div class="w-full py-6 flex items-center justify-between border-b border-turquoise lg:border-none">
                        <div class="flex items-center">
                            <div class="hidden ml-40 space-x-4 lg:block">
                                <Link to="/">
                                    {/*<span class="sr-only">Artempo Studio</span>*/}
                                    <img class="h-14 w-auto" src="../../images/logo/artempo-logo.png" alt="Artempo-logo" />
                                </Link>
                            </div>
                            <div class="hidden ml-40 space-x-16 lg:block">
                                <Link to="/about-us" class="text-base font-large text-cerulean hover:text-sky-700" key="Abut-us">
                                    ¿Quiénes somos?
                                </Link>
                                <Link to="/contacto" class="text-base font-large text-cerulean hover:text-sky-700" key="Contacto">
                                    Contáctanos
                                </Link>
                                <Link to="/obras" class="text-base font-large text-cerulean hover:text-sky-700" key="Obras">
                                    Obras
                                </Link>
                                <Link
                                    to="/obras/crear"
                                    class="text-base font-medium text-cerulean hover:text-sky-700"
                                >
                                    Crear obra
                                </Link>

                                {/*
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
                                    */}

                            </div>
                        </div>
                        {
                            authStatus ?
                                <div class="ml-10 space-x-4">
                                    {/*<Link to="/perfil" class="inline-block bg-turquoise py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-60">Mi perfil</Link>*/}
                                    <Link to="/" onClick={() => { logoutUser() }} class="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-turquoise hover:bg-blue-50">Cerrar sesión</Link>
                                </div>
                                :
                                <div class="ml-10 space-x-4">
                                    <Link to="/iniciar-sesion" class="inline-block bg-cerulean py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-60">Iniciar sesión</Link>
                                    <Link to="/register" class="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-sky-700 hover:bg-turquoise">Registrarme</Link>
                                </div>
                        }
                    </div>
                    <div class="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
                        <Link to="/obras" class="text-base font-medium text-white hover:text-turquoise" key="Solutions">
                            Obras
                        </Link>

                        <Link to="/about-us" class="text-base font-medium text-white hover:text-turquoise" key="Pricing">
                            ¿Quiénes somos?
                        </Link>

                        <Link to="/contacto" class="text-base font-medium text-white hover:text-turquoise" key="Docs">
                            Contáctanos
                        </Link>
                    </div>
                </nav>
            </header>
        </>
    )
}
