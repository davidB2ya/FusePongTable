import ItemTickekts from "./ItemTickekts"

const CardProject = ({ data }) => {

    let count = 0
    const Count = () => {
        count++
        return count
    }
    return (
        <div className="mb-4 mx-0 sm:ml-4 xl:mr-4">
            <div className="shadow-lg rounded-2xl bg-white dark:bg-gray-700 w-full">
                <div className="flex items-center justify-between">
                    <p className="font-bold text-md p-4 text-black dark:text-white">
                        {data.company}
                        <span className="w-full text-sm text-gray-500 dark:text-gray-300  ml-2">
                            ({data.ticket.length})

                        </span>
                    </p>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-4 cursor-pointer text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
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