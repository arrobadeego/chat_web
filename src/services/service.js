import axios from 'axios';

const BASE_URL = "http://localhost:3333";

const HEADERS = {
    headers: {  
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Expose-Headers': 'Authorization',
        'Authorization': localStorage.getItem('Authorization')   
    }}

const request = {
    get: (url, headers)          => axios.get(`${BASE_URL}/${url}`, headers),
    post: (url, body, headers)   => axios.post(`${BASE_URL}/${url}`, body , headers),
    put: (url, body, headers)    => axios.put(`${BASE_URL}/${url}`, body , headers),
    delete: (url, body, headers) => axios.delete(`${BASE_URL}/${url}`, body , headers)
}

const Auth = {
    login: (email, password) => request.post(`login`, { email: email, password: password }, HEADERS)
};

export default {
    Auth
};