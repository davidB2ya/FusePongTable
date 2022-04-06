import React from 'react'
import CardProject from '../../components/CardProject';
import HeaderDashBoard from '../../components/HeaderDashBoard';
import SiderBar from '../../components/SiderBar'
import Traking from '../../components/Traking';
import { useApp } from "../../contexts/store.js";
// import { Routes, Route } from "react-router-dom";

const Dashboard = () => {

    const { UserLogin } = useApp();
    const User = UserLogin

    return (
        <div>
            <main class="bg-gray-100 dark:bg-gray-800 rounded-2xl h-screen overflow-hidden relative">
                <div class="flex items-start justify-between">
                    <SiderBar />
                    <div class="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
                        <HeaderDashBoard />
                        <Traking />
                        <div class="overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
                            <div class="flex flex-col flex-wrap sm:flex-row ">
                                <div class="w-full sm:w-1/2 xl:w-1/3">



                                </div>
                                <div class="w-full sm:w-1/2 xl:w-1/3">
                                    <CardProject />


                                    <div class="w-full sm:w-1/2 xl:w-1/3">



                                        <div class="mb-4">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    )
}

export default Dashboard