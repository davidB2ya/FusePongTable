import axios from "axios";

// const baseUrl = "http://localhost:3001"
const baseUrl = "https://fusepong-api.herokuapp.com"

export const loginResquest = async (body) => {
    return await axios.post(`${baseUrl}/api/login`, body, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
}

export const getCompanysRequest = async () => await axios.get(`${baseUrl}/api/company/all-companys`);

export const getProjectsRequest = async (id) => await axios.get(`${baseUrl}/api/projects/all-projects/${id}`);

export const getActiveProjectsRequest = async (id) => await axios.get(`${baseUrl}/api/projects/all-projects/active/${id}`);

export const getAwaitProjectsRequest = async (id) => await axios.get(`${baseUrl}/api/projects/all-projects/await/${id}`);

export const getTickestRequest = async (id) => await axios.get(`${baseUrl}/api/tickets/all-tickets/${id}`);

export const getTasksRequest = async (id) => await axios.get(`${baseUrl}/api/dashboard/tacks/${id}`);

export const getOneCompanyRequest = async (id) => await axios.get(`${baseUrl}/api/company/one/${id}`);

export const postTikecktRequest = async (body) => {
    return await axios.post(`${baseUrl}/api/tickets/create-ticket`, body, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
}



export const getOneTikecktsRequest = async (id) => await axios.get(`${baseUrl}/api/tickets/one/${id}`);

export const updateTickectRequest = async (id, fields) => {
    await axios.put(`${baseUrl}/api/tickets/update-ticket/${id}`, fields);
};

export const deleteTickectRequest = async (id) => await axios.delete(`${baseUrl}/api/tickets/delete-ticket/${id}`);

// export const createPostRequest = async (post) => {
//   const form = new FormData();
//   for (let key in post) {
//     form.append(key, post[key]);
//   }
//   return await axios.post("/api/posts", form, {
//     headers: {
//       "Content-Type": "multipart/form-data",
//     },
//   });
// };


