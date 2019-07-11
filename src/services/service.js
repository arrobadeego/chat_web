import axios from 'axios';
import Cookies from 'js-cookie';

const BASE_URL = "http://localhost:3333";

const HEADERS = {
    headers: {  
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Expose-Headers': 'Authorization',
        'Authorization': Cookies.get('Authorization')   
    }}

const request = {
    get: (url, headers)          => axios.get(`${BASE_URL}/${url}`, headers),
    post: (url, body, headers)   => axios.post(`${BASE_URL}/${url}`, body , headers),
    put: (url, body, headers)    => axios.put(`${BASE_URL}/${url}`, body , headers),
    delete: (url, body, headers) => axios.delete(`${BASE_URL}/${url}`, body , headers)
}

const Auth = {
    login: (email, password) => request.post(`login`, { email: email, password: password }, HEADERS),
    getProfile: () => request.get(`profile`, HEADERS),
    registration: (name, email, password) => request.post(`registration`, { name, email, password }, HEADERS)
};

const Contacts = {
    getContacts: () => request.get('contacts', HEADERS)
}

export default {
    Auth, Contacts
};