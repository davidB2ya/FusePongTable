import React, { useState } from 'react'
import { useApp } from "../../contexts/store.js";
import swal from "sweetalert"

const CreateProject = () => {

    const User = JSON.parse(window.localStorage.getItem("User"))

    const id_user = User.id
    const id_company = User.id_company

    const { ShowModal } = useApp();
    const { show } = useApp();

    const [nameProjects, setName] = useState("")

    async function onSubmit(e) {
        e.preventDefault();
        const baseUrl = "https://fusepong-api.herokuapp.com"
        const response = await fetch(`${baseUrl}/api/projects/create-project`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nameProjects,
                id_user,
                id_company
            }),
        });

        const data = await response.json();

        if (data.message === 'Project has been create!') {
            swal({
                title:"Exelente",
                text: "Se creó un nuevo Proyecto",
                icon: "success",
                buttons: "Aceptar"
            }).then(response =>{
                if(response){
                    setName("")
                    window.location.replace('');
                }
            })
        } else {
            swal({
                title:"Lo siento",
                text: "No se creó el Proyecto",
                icon: "error",
                buttons: "Aceptar"
            })
        }
    };

    return (
        <div>
            {show &&
                <div id="small-modal" tabindex="-1" class="bg-gray-100/50  overflow-y-auto overflow-x-hidden fixed flex item-center justify-center py-8 z-50 w-full xs:inset-0  md:h-full">
                    <div class="relative p-4 w-full max-w-md h-full md:h-auto">
                        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <div class="flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600">
                                <h3 class="text-xl font-medium text-gray-900 dark:text-white">
                                    Crea un nuevo Projecto
                                </h3>
                                <button onClick={() => ShowModal()} type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="small-modal">
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </button>
                            </div>
                            <form class="mb-6 p-6 space-y-6" onSubmit={onSubmit()}>
                                <label for="large-input" class="block my-4 text-sm font-medium text-gray-900 dark:text-gray-300">Escriba el nombre del Proyecto</label>
                                <input
                                    type="text"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
                                    placeholder="Nombre del Proyecto"
                                    value={nameProjects}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </form>
                            <div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                                <button type="submit" onClick={onSubmit} data-modal-toggle="small-modal" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Crear</button>
                                <button onClick={() => ShowModal()} data-modal-toggle="small-modal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Cancelar</button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default CreateProject