import { createContext, useContext, useEffect, useState } from "react";
import { getCompanysRequest } from "../api/axios";

const appContext = createContext();

export const useApp = () => {
    const context = useContext(appContext);
    if (!context) throw new Error("App Provider is missing");
    return context;
};

export const AppProvider = ({ children }) => {

    const [company, setCompany] = useState([]);
    const [companySelect, setCompanySelect] = useState({});

    useEffect(() => {
        (async () => {
            const res = await getCompanysRequest();
            setCompany(res.data.message);
        })();
    }, []);

    const selectCompany = (select) => {
        setCompanySelect(select)
    }

    const addUser = (user) => {
        localStorage.setItem("User", JSON.stringify(user))
    };

    const addCompany = (buss) => {
        localStorage.setItem("Company", JSON.stringify(buss))
    };


    const signOut = () => {
        localStorage.setItem("User", "")
        localStorage.setItem("Company", "")
    }

        
    return (
        <appContext.Provider
            value={{ company, companySelect, selectCompany,addCompany, addUser, signOut }}
        >
            {children}
        </appContext.Provider>
    );
};
