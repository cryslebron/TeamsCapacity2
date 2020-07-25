import axios from 'axios';

const baseUrl = 'http://localhost:3000/api';
const http = axios.create({
    baseURL: baseUrl,
    //withCredentials: true
});

http.interceptors.request.use(
    (config) => {
        console.log('..loading');
        return config;
    },
    (error) => {
        console.error('..loading done with error');
        return Promise.reject(error);
    }
);

http.interceptors.response.use(
    (config) => {
        console.log('..loading done');
        return config;
    },
    (error) => {
        console.error('..loading done with error');
        return Promise.reject(error);
    }
);

export default http;