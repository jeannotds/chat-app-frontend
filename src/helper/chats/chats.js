import { API } from "../baseAPI.js/url";

export const requestUserChats = (id) => API.get(`/chat/${id}`);