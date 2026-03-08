import axiosClient from "./axiosClient"
import { ENDPOINTS } from "./endpoints"

//get flights 
export const getFlights = async (params) => {
    const res = await axiosClient.get(ENDPOINTS.FLIGHTS,{
        params
    });
    return res.data;
}

//get all bookings
export const getAllBookings = async () => {
    const res = await axiosClient.get(ENDPOINTS.BOOKINGS);
    return res.data;
};


//book flights
export const bookFlight = async (data) => {
    const res = await axiosClient.post(ENDPOINTS.BOOK_FLIGHT,data);
    return res.data;
}


