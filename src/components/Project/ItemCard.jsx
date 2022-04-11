import React from 'react'
import Accordion from './Accordion'

const ItemCard = () => {

    const Project = JSON.parse(window.localStorage.getItem("Project"))

    return (
        <div className="shadow-lg rounded-2xl w-4/8 bg-white dark:bg-gray-800 p-4 my-4">
            <div className="flex item-center justify-between px-4">
                <p className="text-gray-800 dark:text-gray-50 text-2xl font-medium mb-4">
                    {Project.project.name}
                </p>
                <p className="text-gray-900 dark:text-white text-3xl font-bold">
                    {Project.ticket.length}
                    <span className="text-gray-300 text-sm">
                        / total
                    </span>
                </p>
                <a href="/dashboard">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </a>
            </div>
            <div>
                {Project.ticket.length === 0 ? null :
                    <div>
                        {Project.ticket.map((item) => (
                            <Accordion key={Project.id} data={item} />
                        ))}
                    </div>
                }
            </div>

        </div>
    )
}

export default ItemCard