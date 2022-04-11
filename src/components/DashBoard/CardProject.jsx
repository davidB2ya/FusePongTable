import ItemTickekts from "./ItemTickekts"
import { useApp } from "../../contexts/store.js";


const CardProject = ({ data }) => {

    const { activeProjects } = useApp();
    let count = 0
    const Count = () => {
        count++
        return count
    }

    const GetProject = () => {
        activeProjects(data)
    }

    return (
        <div className="mb-4 mx-0 sm:ml-4 xl:mr-4">
            <div className="shadow-lg rounded-2xl bg-white dark:bg-gray-700 w-full">
                <div className="flex items-center justify-between">
                    <p className="font-bold text-md p-4 text-black dark:text-white">
                        {data.project.name}
                        <span className="w-full text-sm text-gray-500 dark:text-gray-300  ml-2">
                            ({data.ticket.length})
                        </span>
                    </p>
                    <a href="/projects">
                        <button type="button" title="Información" onClick={GetProject} >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4 cursor-pointer text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                            </svg>
                        </button>
                    </a>
                </div>
                <ul>
                    {data.ticket.map((ticket) => (
                        <ItemTickekts key={ticket.id} item={ticket} index={Count()} />
                    ))}

                </ul>
            </div>
        </div>
    )
}

export default CardProject