import axios from "axios";

const BaseUrl = process.env.CONTA_CERTA_BASE_URL

export const api = axios.create({
    baseURL: BaseUrl
});

