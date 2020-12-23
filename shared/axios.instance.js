import axios from 'axios';

const customAxios = axios.create({
    baseURL: 'https://dummyapi.io/data/api/',
    headers: { 'app-id': '5fe305f7853604ae46f461d9' }
});

export default customAxios;