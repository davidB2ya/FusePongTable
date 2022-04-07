import React from 'react'

const ItemTickekts = ({ item, index }) => {

    const Styles = () => {
        switch (item.state) {
            case 2:
                return "text-yellow-500 mx-4"

            case 3:
                return "text-green-500 mx-4"
            default:
                return "mx-4"
        }
    }

    return (
        <div>
            <li className="flex items-center text-gray-400 justify-between py-3 border-b-2 border-gray-100 dark:border-gray-800 w-80">
                <div className="flex items-center justify-start text-sm">
                    <span className="mx-4">
                        {index.toString().padStart(2, "0")}
                    </span>
                    <span className={item.state === 3 ? "line-through" : ""}>
                        {item.nameTickets}
                    </span>
                </div>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 1024 1024" className={Styles()}>
                    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8l157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" fill="currentColor">
                    </path>
                </svg>
            </li>
        </div>
    )
}

export default ItemTickekts