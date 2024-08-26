import axios from "axios";

const BaseUrl = process.env.BASE_URL

export const api = axios.create({
    baseURL: BaseUrl
});

