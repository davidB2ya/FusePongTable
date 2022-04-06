import React, { useState } from 'react'

const RegisterForm = () => {

    const [name, setName] = useState("Usuario")
    const [view, setView] = useState(false)
    const [type, setType] = useState("password")
    const [text, setText] = useState("Ver")

const ViewPass = (event) => {
    event.preventDefault();
    setView(!view)
    if (view){
        setType('text')
        setText("Ocultar")
    }else{
        setType('password')
        setText("Ver")
    }
}

    return (

        <section class="h-screen bg-opacity-50 my-10">
            <form class="container max-w-2xl mx-auto shadow-md md:w-3/4">
                <div class="p-4 bg-gray-100 border-t-2 border-blue-400 rounded-lg bg-opacity-5">
                    <div class="max-w-sm mx-auto md:w-full md:mx-0">
                        <div class="inline-flex items-center space-x-4">
                            <a href="#" class="block relative">
                                <img alt="profil" src="https://i.ibb.co/wydDGF8/avatardefault-92824.png" class="mx-auto object-cover rounded-full h-16 w-16 " />
                            </a>
                            <h1 class="text-gray-600">
                                {name}
                            </h1>
                        </div>
                    </div>
                </div>
                <div class="space-y-6 bg-white">
                    <div class="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                        <h2 class="max-w-sm mx-auto md:w-1/3">
                            Cuenta
                        </h2>
                        <div class="max-w-sm mx-auto md:w-2/3">
                            <div class=" relative ">
                                <input type="text" id="user-info-email" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder="Correo" />
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div class="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                        <h2 class="max-w-sm mx-auto md:w-1/3">
                            Información Personal
                        </h2>
                        <div class="max-w-sm mx-auto space-y-5 md:w-2/3">
                            <div>
                                <div class=" relative ">
                                    <input type="text" onChange={(e) => setName(e.target.value)} id="user-info-name" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder="Nombre completo" />
                                </div>
                            </div>
                            <div>
                                <div class=" relative ">
                                    <input type="text" id="user-info-phone" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder="Número de teléfono" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div class="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                        <h2 class="max-w-sm mx-auto md:w-1/3">
                            Contraseña
                        </h2>
                        <div class="max-w-sm mx-auto md:w-2/3">
                            <div class=" relative ">
                                <input type={type} id="user-info-password"  class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder="Contraseña" />
                                <button onClick={ViewPass} class="btn mx-2">{text} Contraseña</button>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div class="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
                        <button type="submit" class="py-2 px-4  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            Guardar
                        </button>
                    </div>
                </div>
            </form>
        </section>

    )
}

export default RegisterForm