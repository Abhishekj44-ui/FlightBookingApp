import dotenv from "dotenv";

dotenv.config();
import connectDB from "../config/db.js";
import { Flight } from "../models/flight.model.js";

const seedFlights = async () => {
  try {
    await connectDB();
    await Flight.deleteMany(); //delete existing records(cleans old data)
    const flights = [
      {
        flight_id: "AI-101",
        airline: "Air India",
        departure_city: "Delhi",
        arrival_city: "Mumbai",
        base_price: 2500,
        current_price: 2500,
      },
      {
        flight_id: "AI-102",
        airline: "IndiGo",
        departure_city: "Delhi",
        arrival_city: "Mumbai",
        base_price: 2200,
        current_price: 2200,
      },
      {
        flight_id: "SG-201",
        airline: "SpiceJet",
        departure_city: "Delhi",
        arrival_city: "Bangalore",
        base_price: 2800,
        current_price: 2800,
      },
      {
        flight_id: "UK-301",
        airline: "Vistara",
        departure_city: "Mumbai",
        arrival_city: "Delhi",
        base_price: 2700,
        current_price: 2700,
      },
      {
        flight_id: "AI-401",
        airline: "Air India",
        departure_city: "Mumbai",
        arrival_city: "Chennai",
        base_price: 2600,
        current_price: 2600,
      },
      {
        flight_id: "6E-501",
        airline: "IndiGo",
        departure_city: "Delhi",
        arrival_city: "Kolkata",
        base_price: 2300,
        current_price: 2300,
      },
      {
        flight_id: "SG-601",
        airline: "SpiceJet",
        departure_city: "Bangalore",
        arrival_city: "Delhi",
        base_price: 2900,
        current_price: 2900,
      },
      {
        flight_id: "UK-701",
        airline: "Vistara",
        departure_city: "Hyderabad",
        arrival_city: "Mumbai",
        base_price: 2400,
        current_price: 2400,
      },
      {
        flight_id: "AI-801",
        airline: "Air India",
        departure_city: "Pune",
        arrival_city: "Delhi",
        base_price: 2100,
        current_price: 2100,
      },
      {
        flight_id: "6E-901",
        airline: "IndiGo",
        departure_city: "Chennai",
        arrival_city: "Bangalore",
        base_price: 2000,
        current_price: 2000,
      },
    ];
    await Flight.insertMany(flights);
    console.log("Flight seeding completed!");
    process.exit();
    
  } catch (error) {
    console.error("Error seeding failed: ", error);
    process.exit(1);
  }
};

seedFlights();
