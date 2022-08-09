import axios from 'axios';

// const API_URL = process.env.API_URL;
const API_URL = "https://fe-screening.onrender.com";
//https://fe-screening.onrender.com/login

// Sample Post request
export const postLogin = (payload) => axios.post(`${API_URL}/login`, payload);
export const getOrderList = (payload) => axios.get(`${API_URL}/orders`);
export const posrOrder = (payload) => axios.post(`${API_URL}/orders`, payload);