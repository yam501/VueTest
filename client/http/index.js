import axios from "axios";


const $host = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
})

export {$host}