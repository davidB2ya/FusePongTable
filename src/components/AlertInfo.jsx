import React from 'react'
import { useNavigate } from 'react-router-dom';

const AlertInfo = ({ data, location }) => {

    const navigate = useNavigate();
    
    return (
        
                <div className="absolute z-20">
                    <div className=" shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-800 w-64 m-auto">
                        <div className="w-full h-full text-center">
                            <div className="flex h-full flex-col justify-between">
                                <svg className="h-20 w-20 mt-4 m-auto text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                                    </path>
                                </svg>
                                <p className="text-gray-600 dark:text-gray-100 text-md py-2 px-6">
                                    <span className="text-gray-800 dark:text-white font-bold">
                                    Hola {data.user.name}
                                    </span>
                                    <hr/>
                                    Bienvenid@
                                </p>
                                <div className="flex items-center justify-between gap-4 w-full mt-8">
                                    <button type="button" onClick={() => navigate(`/${location}`)} className="py-2 px-4  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                        Cerrar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        
    )
}

export default AlertInfo