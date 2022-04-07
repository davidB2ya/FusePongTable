import axios from "axios";

// const baseUrl = "http://localhost:3001"
const baseUrl = "https://fusepong-api.herokuapp.com"

export const getCompanysRequest = async () => await axios.get(`${baseUrl}/api/company/all-companys`);

export const getProjectsRequest = async (id) => await axios.get(`${baseUrl}/api/projects/all-projects/${id}`);

export const getActiveProjectsRequest = async (id) => await axios.get(`${baseUrl}/api/projects/all-projects/active/${id}`);

export const getAwaitProjectsRequest = async (id) => await axios.get(`${baseUrl}/api/projects/all-projects/await/${id}`);

export const getTickestRequest = async (id) => await axios.get(`${baseUrl}/api/tickets/all-tickets/${id}`);

export const getTasksRequest = async (id) => await axios.get(`${baseUrl}/api/dashboard/tacks/${id}`);

export const getOneCompanyRequest = async (id) => await axios.get(`${baseUrl}/api/company/one/${id}`);


// export const deletePostRequest = async (id) =>
//   await axios.delete("/api/posts/" + id);

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

// export const updatePostRequest = async (id, newPostFields) => {
//   return axios.put("/api/posts/" + id, newPostFields);
// };
