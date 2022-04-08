import React, { useState, useEffect } from 'react'
import HeaderDashBoard from '../../components/HeaderDashBoard';
import SiderBar from '../../components/SiderBar'
import { getProjectsRequest, getActiveProjectsRequest, getAwaitProjectsRequest, getTasksRequest } from "../../api/axios.js";
// import Modal from '../../components/Modal';
import ItemCard from '../../components/ItemCard';

const Projects = () => {

    const User = JSON.parse(window.localStorage.getItem("User"))

    const [dataTasks, setDataTasks] = useState([])

    const [allProjects, setAllProjects] = useState()
    const [activeProjects, setActiveProjects] = useState()
    const [awaitProjects, setAwaitProjects] = useState()

    useEffect(() => {
        (async () => {
            const res = await getProjectsRequest(User.id_company);
            setAllProjects(res.data.message.length);
        })();
        (async () => {
            const active = await getActiveProjectsRequest(User.id_company);
            setActiveProjects(active.data.message.length);
        })();
        (async () => {
            const hold = await getAwaitProjectsRequest(User.id_company);
            setAwaitProjects(hold.data.message.length);
        })();
    }, [User]);

    useEffect(() => {
        (async () => {
            const res = await getTasksRequest(User.id_company)
            setDataTasks(res.data.message);
        })();
    }, []);

    return (
        <div>
            <main className="bg-gray-100 dark:bg-gray-800 rounded-2xl h-screen overflow-hidden relative">
                <div className="flex items-start justify-between">
                    <SiderBar location="projects" />
                    <div className="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
                        <HeaderDashBoard />
                        <div class="overflow-auto h-screen pb-24 px-4 md:px-6">
                            {/* <Modal /> */}
                            <ItemCard/>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    )
}

export default Projects