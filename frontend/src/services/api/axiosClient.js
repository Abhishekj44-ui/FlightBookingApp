import axios from "axios"

const axiosClient = axios.create({
    baseURL: "http://localhost:5000/api",
    timeout: 10000,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    }
});



//response intercepter
axiosClient.interceptors.response.use(
    (response) => {
        console.log("[RESPONSE]",{
            url: `${response.config.baseURL}${response.config.url}`,
            status: response.status,
            data: response.data
        });
        return response;
    },
    (error) => {
        const status = error?.response?.status;
        const data = error?.response?.data;

        console.error("[AXIOS ERROR]", {
            status,
            message: data?.message || error.message,
            data
        });
        return Promise.reject(data || error);
    }
);


export default axiosClient;

