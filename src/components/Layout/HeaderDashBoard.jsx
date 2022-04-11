import React from 'react'

const HeaderDashBoard = () => {

    const User = JSON.parse(window.localStorage.getItem("User"))
    const DataCompany = JSON.parse(window.localStorage.getItem("Company"))

    const cutName = User.name.split(" ");
    const firstName = cutName[0];

    return (
        <div>
            {
                DataCompany !== null && <header className="w-full shadow-lg bg-white dark:bg-gray-700 items-center h-20 rounded-2xl z-40">
                    <div className="relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center">
                        <div className="relative items-center pl-1 flex w-full lg:max-w-68 sm:pr-2 sm:ml-0">
                            <div className="container relative left-0 z-50 flex w-3/4 h-auto ">
                                <div className="relative p-1 flex items-center justify-start w-1/4 ml-5 mr-4 sm:mr-0 sm:right-auto">
                                    <a href="/profile" className="block relative">
                                        <img title="Perfil" alt="profile" src={User.avatar} className="mx-auto object-cover rounded-full h-10 w-10 " />
                                        <span title="Perfil" className="font-medium text-gray-900 dark:text-gray-300">{firstName}</span>
                                    </a>
                                </div>
                                <div>
                                    <a className="w-full font-thin uppercase text-blue-500 flex items-center p-4 my-2 transition-colors duration-200 justify-start bg-gradient-to-r from-white to-blue-100 border-r-4 border-blue-500 dark:from-gray-700 dark:to-gray-800 " href="/dashboard">
                                        <span className="text-left">
                                            <svg width="20" height="20" fill="currentColor" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z">
                                                </path>
                                            </svg>
                                        </span>
                                        <span className="mx-4 text-sm font-normal">
                                            Inicio
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div className="relative p-1 flex items-center justify-end w-1/4 ml-5 mr-4 sm:mr-0 sm:right-auto">
                                <img alt="profil" src={DataCompany.logoCompany} className="mx-auto object-cover h-10 w-10 " />
                                <span className="text-sm font-medium text-gray-500 dark:text-gray-300 ">
                                    {DataCompany.nameCompany}
                                </span>
                            </div>

                        </div>
                    </div>
                </header>
            }
        </div>
    )
}

export default HeaderDashBoard