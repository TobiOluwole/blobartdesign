import axios from "axios";
import {store} from "@/store";

// Axios Interceptor Instance
const AxiosInstance = axios.create({
    baseURL: process.env.BASE_URL
});

AxiosInstance.defaults.withCredentials = true;

AxiosInstance.interceptors.request.use(
    (config) => {

        // const jwtToken = localStorage.getItem("token");

        config.headers["Content-Type"] = 'application/json';
        config.headers.Accept = 'application/json';

        config.withCfingerpriredentials = true;

        // If token is present, add it to request's Authorization Header
        // if (jwtToken) {
        //     if (config.headers) config.headers.Authorization = `Bearer ${jwtToken}`;
        // }

        return config;
    }
);

export default AxiosInstance