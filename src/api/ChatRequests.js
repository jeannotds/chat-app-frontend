
import axios from 'axios'




const API = axios.create({baseURL: 'http://localhost:3005'})

export const userChats = (id) => API.get(`/chat/${id}`)