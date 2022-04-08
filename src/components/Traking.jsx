import React from 'react'

const Traking = ({ all, active, hold }) => {
    return (
        <div className="flex justify-between ">
            <div className="w-1/4 ">
                <div className="rounded-xl shadow-lg px-4 my-2 py-6 w-full bg-white dark:bg-gray-700 relative">
                    <p className="text-gray-400 text-sm text-center">
                        Total de Proyectos
                    </p>
                    <div className="flex items-center justify-between mx-8 space-x-8 my-2">
                        <p className="text-2xl text-black dark:text-white font-bold">
                            {all}
                        </p>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="w-1/4 ">
                <div className="rounded-xl shadow-lg px-4 my-2 py-6 w-full bg-white dark:bg-gray-700 relative">
                    <p className="text-gray-400 text-sm text-center">
                        Proyectos Activos
                    </p>
                    <div className="flex items-center justify-between mx-8 space-x-8 my-2">
                        <p className="text-2xl text-black dark:text-white font-bold">
                            {active}
                        </p>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="w-1/4 ">
                <div className="rounded-xl shadow-lg px-4 my-2 py-6 w-full bg-white dark:bg-gray-700 relative">
                    <p className="text-gray-400 text-sm text-center">
                        Proyectos en Espera
                    </p>
                    <div className="flex items-center justify-between mx-8 space-x-8 my-2">
                        <p className="text-2xl text-black dark:text-white font-bold">
                            {hold}
                        </p>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Traking