import React, { useState } from 'react'
import { useApp } from '../contexts/store'
import Alert from './Register/Alert'
import SelectMenus from './Register/SelectMenus'
import { useNavigate } from 'react-router-dom';
import swal from "sweetalert"

const FormUpdateUser = () => {

    const navigate = useNavigate();
    const User = JSON.parse(window.localStorage.getItem("User"))
    const DataCompany = JSON.parse(window.localStorage.getItem("Company"))

    const [view, setView] = useState(false)
    const [type, setType] = useState("password")
    const [text, setText] = useState("Ver")
    const [stateAlert, setStateAlert] = useState(false);
    const [alert, setAlert] = useState(false);
    const [name, setName] = useState(User.name);
    const [email, setEmail] = useState(User.email);
    const [avatar, setAvatar] = useState(User.avatar);
    const [password, setPassword] = useState(User.passwordHash);
    const [phoneNumber, setPhone] = useState(User.phoneNumber);

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
        const response = await fetch(`${baseUrl}/api/users/update-user/${User.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                password,
                phoneNumber,
                avatar,
                id_company
            }),
        });

        const data = await response.json();

        if (data.message === 'User updated successfully!') {
            setStateAlert(true);
            setAlert(true);
            swal({
                title: "Se actualizó el perfil",
                text: "Debes reiniciar la sección",
                icon: "success",
                buttons: "Aceptar"
            }).then(response => {
                if (response) {
                    navigate("/")
                }
            })
        } else {
            setAlert(true);
            swal({
                title:"Error",
                text: "No se pudo editar, intentelo de nuevo",
                icon: "error",
                buttons: "Aceptar"
            })
        }
    }

    return (
        <div>
            <section className="h-screen bg-opacity-50 my-10">
                {alert === true && <Alert state={stateAlert} location="profile" />}
                <form className="container max-w-2xl mx-auto shadow-md md:w-3/4" >
                    <div className="p-8 bg-gray-100 border-t-2 border-blue-400 rounded-lg bg-opacity-5">
                        <div className="max-w-sm mx-auto md:w-full md:mx-0">
                            <div className="flex items-center justify-between ">
                                <img alt="profil" src={User.avatar} className=" mx-auto object-cover rounded-full h-16 w-16 " />
                                <h1 className="text-gray-600 w-full flex ml-4">
                                    {User.name}
                                </h1>
                                <img className="lg:flex h-10 w-10 sm:h-10" src={DataCompany.logoCompany} alt="logo" />
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4 bg-white">
                        <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-2">
                            <h2 className="max-w-sm mx-auto md:w-1/3">
                                Cuenta
                            </h2>
                            <div className="max-w-sm mx-auto md:w-2/3">
                                <div className=" relative ">
                                    <input
                                        type="email"
                                        id="user-info-email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                        placeholder="Correo" />
                                </div>
                            </div>
                        </div>
                        <div className="items-center w-full p-4 space-y-2 text-gray-500 md:inline-flex md:space-y-0">
                            <h2 className="max-w-sm mx-auto md:w-1/3">
                                Avatar
                            </h2>
                            <div className="max-w-sm mx-auto md:w-2/3">
                                <div className=" relative ">
                                    <input type="text" id="user-info-email" value={avatar} onChange={(e) => setAvatar(e.target.value)} className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder="Url Imagen" />
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
            </section></div>
    )
}

export default FormUpdateUser