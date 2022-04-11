import React, { useState } from "react";
import { createPopper } from "@popperjs/core";
import Option from "./Option";
import { useApp } from "../../contexts/store.js";

const Dropdown = ({ color }) => {
    // dropdown props
    const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
    const btnDropdownRef = React.createRef();
    const popoverDropdownRef = React.createRef();
    const openDropdownPopover = () => {
        createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
            placement: "bottom-start"
        });
        setDropdownPopoverShow(true);
    };
    const closeDropdownPopover = () => {
        setDropdownPopoverShow(false);
    };
    // bg colors
    let bgColor;
    color === "blue"
        ? (bgColor = "bg-blue-500-500")
        : (bgColor = "bg-slate-700");

    const { listcompany } = useApp();
    const data = listcompany

    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full sm:w-full md:w-full px-4">
                    <div className="relative inline-flex align-middle w-full">
                        <button
                            className={
                                "text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 " +
                                bgColor}
                            type="button"
                            ref={btnDropdownRef}
                            onClick={() => {
                                dropdownPopoverShow
                                    ? closeDropdownPopover()
                                    : openDropdownPopover();
                            }}>
                            Selecciona una Compañía
                        </button>
                        <div ref={popoverDropdownRef} className={(dropdownPopoverShow ? "block " : "hidden ") +
                            (color === "white" ? "bg-white " : bgColor + " ") +
                            "text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"
                        }
                            style={{ minWidth: "12rem" }}
                        >
                            {data.map((compa) => (
                                <Option key={compa.id} data={compa} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dropdown
