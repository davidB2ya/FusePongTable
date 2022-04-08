import React, { useState, useEffect } from 'react'
import { getOneTikecktsRequest, updateTickectRequest } from '../api/axios';

const Accordion = ({ data }) => {

    // const Project = JSON.parse(window.localStorage.getItem("Project"))
    const [ticketData, setTicketData] = useState([])
    const [updated, setUpdated] = useState(false)
    const [description, setDescription] = useState(ticketData.description)
    const [state, setState] = useState(data.state)
    const [loading, setLoading] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault();
        const field = {
            description: description,
            state: state,
        }

        const res = updateTickectRequest(data.id, field);
        if (res.msg === "Ticket updated successfully!") {
            setLoading(!loading)
            setUpdated(!updated)
        }
    };

    const updateState = (item) => {
        setState(item)
        setUpdated(!updated)
    }

    useEffect(() => {
        (async () => {
            const res = await getOneTikecktsRequest(data.id);
            setTicketData(res.data.message);
            setDescription(res.data.message.description)
        })();
    }, [updated]);

    const Styles = () => {
        switch (state) {
            case 2:
                return "flex justify-between items-center p-5 w-full font-medium text-left rounded-t-xl border  border-gray-200 focus:ring-4 focus:ring-yellow-200 dark:focus:ring-yellow-800 dark:border-gray-700 hover:bg-yellow-100 dark:hover:bg-gray-800 bg-yellow-100 dark:bg-gray-800 text-yellow-600 dark:text-white"
            case 3:
                return "flex justify-between items-center p-5 w-full font-medium text-left rounded-t-xl border  border-gray-200 focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 dark:border-gray-700 hover:bg-green-100 dark:hover:bg-gray-800 bg-green-100 dark:bg-gray-800 text-green-600 dark:text-white"
            default:
                return "flex justify-between items-center p-5 w-full font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800"
        }
    }

    return (
        <div id="accordion-color" data-accordion="collapse" data-active-classNamees="bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white" className="bo mb-4">
            <h2 id="accordion-color-heading-1">
                <button type="button" className={Styles()} data-accordion-target="#accordion-color-body-1" aria-expanded="true" aria-controls="accordion-color-body-1">
                    <span>{ticketData.nameTickets}</span>
                    {/* <svg data-accordion-icon="" className="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> */}
                </button>
            </h2>
            <div id="accordion-color-body-1" className="" aria-labelledby="accordion-color-heading-1">
                <div className="p-5 border border-t-0 rounded-t-none rounded-lg border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                    {/* <p className="mb-2 text-gray-500 dark:text-gray-400">{ticketData.description}</p>
                    <hr /> */}
                    <form class="mb-6" onSubmit={onSubmit}>
                        <label for="large-input" class="block my-4 text-sm font-medium text-gray-900 dark:text-gray-300">Editar descripción</label>
                        <input type="text" placeholder={description} value={description} onChange={(e) => setDescription(e.target.value)} id="large-input" className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border-0 border-b-2 border-gray-300 sm:text-md  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        {/* <input type="text" placeholder={description} value={description} onChange={(e) =>  setDescription(e.target.value) }  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline" /> */}
                    </form>
                    <div className="flex items-center justify-between mt-6">
                        <div className="">
                            {loading === true ? <button disabled type="button" class="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">
                                <svg role="status" class="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                                </svg>
                                Loading...
                            </button> :
                                <button onClick={onSubmit} type="button" class="focus:outline-none text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-blue-900">Guardar</button>
                            }
                            <button onClick={() => updateState(2)} type="button" class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">En proceso</button>
                            <button onClick={() => updateState(3)} type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Listo</button>
                        </div>
                        <button >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                        </button>
                    </div>

                </div>
            </div>
            {/* <h2 id="accordion-color-heading-2">
                    <button type="button" className="flex justify-between items-center p-5 w-full font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-color-body-2" aria-expanded="false" aria-controls="accordion-color-body-2">
                        <span>Is there a Figma file available?</span>
                        <svg data-accordion-icon="" className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                </h2>
                <div id="accordion-color-body-2" className="hidden" aria-labelledby="accordion-color-heading-2">
                    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                        <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
                        <p className="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" className="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classNamees from Tailwind CSS and components from Flowbite.</p>
                    </div>
                </div>
                <h2 id="accordion-color-heading-3">
                    <button type="button" className="flex justify-between items-center p-5 w-full font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-color-body-3" aria-expanded="false" aria-controls="accordion-color-body-3">
                        <span>What are the differences between Flowbite and Tailwind UI?</span>
                        <svg data-accordion-icon="" className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                </h2>
                <div id="accordion-color-body-3" className="hidden" aria-labelledby="accordion-color-heading-3">
                    <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                        <p className="mb-2 text-gray-500 dark:text-gray-400">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                        <ul className="pl-5 list-disc text-gray-500 dark:text-gray-400">
                            <li><a href="https://flowbite.com/pro/" className="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
                            <li><a href="https://tailwindui.com/" rel="nofollow" className="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
                        </ul>
                    </div>
                </div> */}
        </div>


    )
}

export default Accordion