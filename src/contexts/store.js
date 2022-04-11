import { createContext, useContext, useEffect, useState } from "react";
import { getCompanysRequest, getOneCompanyRequest } from "../api/axios";

const appContext = createContext();

export const useApp = () => {
    const context = useContext(appContext);
    if (!context) throw new Error("App Provider is missing");
    return context;
};

export const AppProvider = ({ children }) => {

    const [user, setUser] = useState([])
    const [company, setCompany] = useState([])
    const [project, setProject] = useState([])

    const baseUrl = "https://fusepong-api.herokuapp.com"

    const [listcompany, setListCompany] = useState([]);
    const [companySelect, setCompanySelect] = useState({});
    const [showProject, setShowProject] = useState();
    const [show, setShow] = useState(false)
    const [updated, setUpdated] = useState(false)


    useEffect(() => {
        (async () => {
            const res = await getCompanysRequest();
            setListCompany(res.data.message);
        })();
    }, []);

    async function Login(email, password) {

        const response = await fetch(`${baseUrl}/api/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password
            }),
        });
        const data = await response.json();

        if (data.msg === 'Login success!') {
            setUser(data.user)
            localStorage.setItem("User", JSON.stringify(data.user))
            const res = await getOneCompanyRequest(data.user.id_company)
            setCompany(res.data.message)
            localStorage.setItem("Company", JSON.stringify(res.data.message))
            return {
                login: true,
                user: data.user
            }

        } else return false
    }

    const selectCompany = (select) => {
        setCompanySelect(select)
    }

    const activeProjects = (data) => {
        setShowProject(data)
        setProject(data)
        localStorage.removeItem("Project");
        localStorage.setItem("Project", JSON.stringify(data))
    };

    const ShowModal = () => {
        setShow(!show)
    };

    const Updated = () => {
        setUpdated(!updated)
    }

    const signOut = () => {
        console.log("Sign Out")
        localStorage.clear();
    };

    return (
        <appContext.Provider
            value={{ user, company, listcompany, companySelect, showProject, show, updated, project, Login, Updated, selectCompany, signOut, activeProjects, ShowModal }}
        >
            {children}
        </appContext.Provider>
    );
};
