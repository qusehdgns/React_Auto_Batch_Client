import Axios from "axios";

const clientAPI = Axios.create({
    baseURL: "http://localhost:8081",
    responseType: "json",
});

export default clientAPI;