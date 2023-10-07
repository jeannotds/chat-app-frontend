import axios from "axios";
 
export const API = axios.create({ baseUrl: 'http://localhost:8001/api'});