import React, { useEffect } from 'react'
import Font from '../../assets/undraw_Tasting_re_3k5a.png'
import Font2 from '../../assets/undraw_add_information_j2wg.png'
import { useApp } from '../../contexts/store.js'

const Welcome = () => {

    const { signOut } = useApp();

    useEffect(() => {
        (async () => {
            await signOut()
        })();
    }, []);

    return (

        <main className="dark:bg-gray-800 bg-white relative overflow-hidden h-full">

            <div className="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
                <div className="container mx-auto px-6 flex relative py-16">
                    <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
                        <h1 className="font-bebas-neue uppercase text-6xl sm:text-7xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                            Fuse pong
                            <span className="text-5xl sm:text-6xl">
                                Planning
                            </span>
                        </h1>
                        <p className="text-sm sm:text-base my-4 text-gray-700 dark:text-white">
                            Acompañamos el proceso de <b>transformación digital</b> de tu empresa. A través de <b>soluciones tecnológicas amigables</b> que se adapten a tus <b>necesidades</b>.
                        </p>
                        <div className="flex mt-8">
                            <a href="/login" className="uppercase py-2 px-4 rounded-lg bg-blue-500 border-2 border-transparent text-white text-md mr-4 hover:bg-green-500">
                                Iniciar Sesión
                            </a>
                            <a href="/register" className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-blue-500 text-blue-500 dark:text-white hover:bg-blue-500 hover:text-white text-md">
                                Registrarse
                            </a>
                        </div>
                    </div>
                    <div className="xs:hidden inline lg:block sm:w-2/3 lg:w-lg lg:h-lg relative">
                        <img src={Font} className="max-w-xs md:max-w-sm m-auto lg:h-lg ml-8" alt="fondo" />
                        <img src={Font2} className="max-w-xs md:max-w-sm m-auto lg:h-lg mr-8" alt="fondo" />
                    </div>
                </div>
            </div>
        </main>

    )
}

export default Welcome