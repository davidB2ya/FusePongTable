import { createContext, useContext, useEffect, useState } from "react";
import { getCompanysRequest } from "../api/axios";
// import { useNavigate } from 'react-router-dom';


const appContext = createContext();

export const useApp = () => {
    const context = useContext(appContext);
    if (!context) throw new Error("App Provider is missing");
    return context;
};

export const AppProvider = ({ children }) => {
    const [company, setCompany] = useState([]);
    const [companySelect, setCompanySelect] = useState({});
    const [UserLogin, setUserLogin] = useState({});
    console.log(UserLogin)


    console.log(company)
    useEffect(() => {
        (async () => {
            const res = await getCompanysRequest();
            setCompany(res.data.message);
        })();
    }, []);

    const selectCompany = (select) => {
        setCompanySelect(select)
    }

    // const navigate = useNavigate();

    const addUser = (user) =>{
        setUserLogin(user)
    };

    const signOut = () => {
        setUserLogin()
        
    }

    // const componentDidUpdate = () =>{
    //     localStorage.setItem('datAvatar', JSON.stringify(this.state.avatar))
    //     localStorage.setItem('dataName', JSON.stringify(this.state.name))
    //     localStorage.setItem('dataUser', JSON.stringify(this.state.id_user))
    // };

    // const componentDidMount = () =>{
    //     const datAvatar = JSON.parse(localStorage.getItem('datAvatar'));
    //     if(datAvatar !== null){
    //         this.setState({avatar: datAvatar});
    //     }
    //     const dataName = JSON.parse(localStorage.getItem('dataName'));
    //     if(dataName !== null){
    //         this.setState({name: dataName});
    //     }
    //     const dataUser = JSON.parse(localStorage.getItem('dataUser'));
    //     if(dataUser !== null){
    //         this.setState({id_user: dataUser});
    //     }
    // };


    //     const deletePost = async (id) => {
    //         const res = await deletePostRequest(id);
    //         if (res.status === 204) {
    //             setPosts(posts.filter((post) => post._id !== id));
    //         }
    //     };

    //     const createPost = async (post) => {
    //         try {
    //             const res = await createPostRequest(post);
    //             setPosts([...posts, res.data]);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     };

    //     const getPost = async (id) => {
    //         try {
    //             const res = await getPostRequest(id);
    //             return res.data;
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     };

    //     const updatePost = async (id, post) => {
    //         try {
    //             const res = await updatePostRequest(id, post);
    //             setPosts(posts.map((post) => (post._id === id ? res.data : post)));
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     };

    return (
        <appContext.Provider
            value={{ company, companySelect, UserLogin, selectCompany, addUser, signOut}}
        >
            {children}
        </appContext.Provider>
    );
};
