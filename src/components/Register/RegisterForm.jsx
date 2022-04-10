import React, { useState } from 'react'
import SelectMenus from './SelectMenus'
import { useApp } from "../../contexts/store.js";
import Logo from '../../assets/logo-fusepong.png'
import Alert from './Alert';

const RegisterForm = () => {

    // State local
    const [view, setView] = useState(false)
    const [type, setType] = useState("password")
    const [text, setText] = useState("Ver")
    const [stateAlert, setStateAlert] = useState(false);
    const [alert, setAlert] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhone] = useState('');

    const baseUrl = "https://fusepong-api.herokuapp.com"
    const { companySelect } = useApp();
    const select = companySelect

    let id_company = select.id

    const ViewPass = (event) => {
        event.preventDefault();
        setView(!view)
        if (view) {
            setType('text')
            setText("Ocultar")
        } else {
            setType('password')
            setText("Ver")
        }
    }

    async function registerUser(event) {
        event.preventDefault();
        const response = await fetch(`${baseUrl}/api/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                password,
                phoneNumber,
                id_company
            }),
        });

        const data = await response.json();

        if (data.message === 'User has been create!') {
            setStateAlert(true);
            setAlert(true);
        } else {
            setAlert(true);
        }
    }

    return (

        <section className="h-screen bg-opacity-50 my-10">
            {alert === true && <Alert state={stateAlert} location="register" />}
            <form className="container max-w-2xl mx-auto shadow-md md:w-3/4" onSubmit={registerUser}>
                <div className="p-4 bg-gray-100 border-t-2 border-blue-400 rounded-lg bg-opacity-5">
                    <div className="max-w-sm mx-auto md:w-full md:mx-0">
                        <div className="relative flex items-center justify-between ">
                            <img alt="profil" src="https://i.ibb.co/wydDGF8/avatardefault-92824.png" className="absolute mx-auto object-cover rounded-full h-16 w-16 " />
                            <h1 className="text-gray-600 w-full flex ml-16 ">
                                {name}
                            </h1>
                            <img className="md:hidden lg:flex relative left-2/4 h-8 w-1/3 sm:h-10" src={Logo} alt="logo" />
                        </div>
                    </div>
                </div>
                <div className="space-y-6 bg-white">
                    <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                        <h2 className="max-w-sm mx-auto md:w-1/3">
                            Cuenta
                        </h2>
                        <div className="max-w-sm mx-auto md:w-2/3">
                            <div className=" relative ">
                                <input type="text" id="user-info-email" value={email} onChange={(e) => setEmail(e.target.value)} className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder="Correo" />
                            </div>
                        </div>
                    </div>
                    <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                        <h2 className="max-w-sm mx-auto md:w-1/3">
                            Perteneces a la Compañía
                        </h2>
                        <div className="max-w-sm mx-auto md:w-2/3">
                            <SelectMenus />
                        </div>
                    </div>

                    <hr />
                    <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                        <h2 className="max-w-sm mx-auto md:w-1/3">
                            Información Personal
                        </h2>
                        <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
                            <div>
                                <div className=" relative ">
                                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} id="user-info-name" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder="Nombre completo" />
                                </div>
                            </div>
                            <div>
                                <div className=" relative ">
                                    <input type="text" value={phoneNumber} onChange={(e) => setPhone(e.target.value)} id="user-info-phone" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder="Número de teléfono" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                        <h2 className="max-w-sm mx-auto md:w-1/3">
                            Contraseña
                        </h2>
                        <div className="max-w-sm mx-auto md:w-2/3">
                            <div className=" relative ">
                                <input autoComplete="off" type={type} id="user-info-password" value={password} onChange={(e) => setPassword(e.target.value)} className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder="Contraseña" />
                                <button onClick={ViewPass} className="btn mx-2">{text} Contraseña</button>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
                        <button type="submit" onClick={registerUser} className="py-2 px-4  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            Guardar
                        </button>
                    </div>
                </div>
            </form>
        </section>

    )
}

export default RegisterForm