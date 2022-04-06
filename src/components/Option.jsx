import React from 'react'
import { useApp } from "../contexts/store.js";

const Option = ({ data }) => {

    const { selectCompany } = useApp();

    return (
        <div>
            <button
                className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700 text-white-200"

                onClick={(e) => {
                    e.preventDefault()
                    selectCompany(
                        {
                        "name": data.nameCompany,
                        "id": data.id
                        }
                );
                }}
            >
                {data.nameCompany}
            </button>
        </div>
    )
}

export default Option