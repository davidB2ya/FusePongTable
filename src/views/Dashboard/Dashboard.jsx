import React, { useState, useEffect } from 'react'
import CardProject from '../../components/CardProject';
import HeaderDashBoard from '../../components/HeaderDashBoard';
import SiderBar from '../../components/SiderBar'
import Traking from '../../components/Traking';
import { getProjectsRequest, getActiveProjectsRequest, getAwaitProjectsRequest, getTasksRequest } from "../../api/axios.js";

const Dashboard = () => {

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
                    <SiderBar />
                    <div className="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
                        <HeaderDashBoard />
                        <Traking all={allProjects} active={activeProjects} hold={awaitProjects} />
                        <div className="overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
                            <div className="flex flex-col flex-wrap sm:flex-row ">
                                {dataTasks.length === 0 ? null : <div>
                                    {dataTasks.map((task) => (
                                        <CardProject key={task.id} data={task} />
                                    ))}
                                </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    )
}

export default Dashboard