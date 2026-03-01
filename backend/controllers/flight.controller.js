import { Flight } from "../models/flight.model.js";



export const getFlights = async (req, res) => {
    try {
        const {departure, arrival} = req.query;
        const query = {};
        

        if (departure) query.departure_city = departure;
        if (arrival) query.arrival_city = arrival;


        // fetch max 10 flights
        const flights = await Flight.find(query).limit(10);

        res.status(200).json({
            success: true,
            count: flights.length,
            data: flights
        });
        
    } catch (error) {
        res.status(500).json({success: false, message: error.message});
    }
};