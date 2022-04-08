import { createContext, useContext, useEffect, useState } from "react";
import { getCompanysRequest, getOneCompanyRequest } from "../api/axios";

const appContext = createContext();

export const useApp = () => {
    const context = useContext(appContext);
    if (!context) throw new Error("App Provider is missing");
    return context;
};

export const AppProvider = ({ children }) => {

    const [company, setCompany] = useState([]);
    const [companySelect, setCompanySelect] = useState({});
    const [showProject, setShowProject] = useState();

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
        console.log("Sign Out")
        localStorage.clear();
    };

    const activeProjects = (data) => {
        setShowProject(data)
        console.log(data)
    };
        
    return (
        <appContext.Provider
            value={{ company, companySelect, showProject, selectCompany,addCompany, addUser, signOut , activeProjects}}
        >
            {children}
        </appContext.Provider>
    );
};
