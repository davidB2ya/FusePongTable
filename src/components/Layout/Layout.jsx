import React, { useState, useEffect } from 'react'
import { getProjectsRequest, getActiveProjectsRequest, getAwaitProjectsRequest, getTasksRequest } from "../../api/axios.js";
import { useApp } from "../../contexts/store.js";

// Import components
import CardProject from '../DashBoard/CardProject';
import HeaderDashBoard from './HeaderDashBoard';
import SiderBar from './SiderBar'
import Traking from '../DashBoard/Traking';
import ItemCard from '../Project/ItemCard';
import Modal from '../Project/Modal';
import FormUpdateUser from '../FormUpdateUser';


const Layout = ({ location }) => {

  const User = JSON.parse(window.localStorage.getItem("User"))
  const Project = JSON.parse(window.localStorage.getItem("Project"))
  const [dataTasks, setDataTasks] = useState([])
  const [allProjects, setAllProjects] = useState()
  const [activeProjects, setActiveProjects] = useState()
  const [awaitProjects, setAwaitProjects] = useState()

  const { ShowModal } = useApp();
  const { show } = useApp();
  const { updated } = useApp();

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
  }, [updated]);

  const Section = () => {
    switch (location) {
      case "projects":
        return (
          Project === null ?
            <div>
              <h1>Seleccione un Proyecto</h1>
            </div>
            :
            <div>
              <div className="overflow-auto h-screen pb-24 px-4 md:px-6">
                <ItemCard />
                <button onClick={() => ShowModal()} type="button" className="py-2 px-4 my-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                  Agregar Historia
                </button>
              </div>
              {show === true && <Modal />}
            </div>
        )

      case "profile":
        return (
          <div className="overflow-auto h-screen pb-60 px-4 md:px-6">
            <FormUpdateUser />
          </div>
        )

      default:
        return (
          <main class="overflow-auto h-screen pb-24 px-4 md:px-6">
            <Traking all={allProjects} active={activeProjects} hold={awaitProjects} />
            <div className=" pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
              <div className=" pb-24 px-4 md:px-6">
                <div className="flex-wrap sm:flex-row ">
                  {dataTasks.length === 0 ? null : <div>
                    {dataTasks.map((task) => (
                      <CardProject key={task.id} data={task} />
                    ))}
                  </div>
                  }
                  <button onClick={() => ShowModal()} type="button" className="py-2 px-4 my-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                    Nuevo Proyecto
                  </button>
                </div>

              </div>

            </div>
            <a href="/home">
              <span className="text-left fixed right-10 bottom-10 bg-red-600 text-white rounded-2xl p-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
              </span>
            </a>
          </main>
        )
    }

  }

  return (
    <div>
      <main className="bg-gray-100 dark:bg-gray-800 rounded-2xl h-screen overflow-hidden relative">
        <div className="flex items-start justify-between">
          <SiderBar location={location} />
          <div className="flex flex-col w-full h-full pl-0 md:p-4 md:space-y-4">
            <HeaderDashBoard />
            {Section()}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Layout