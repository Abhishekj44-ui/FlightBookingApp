import express from "express"
import { bookFlight, downloadTicket, getAllBookings } from "../controllers/booking.controller.js";


const router = express.Router();

//book a flight
router.post("/book",bookFlight);

//get all bookings
router.get("/",getAllBookings);

//download the ticket PDF
router.get("/:pnr/ticket",downloadTicket);


export default router;