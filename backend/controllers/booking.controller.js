import { Booking } from "../models/booking.model.js";
import { Flight } from "../models/flight.model.js";
import { Wallet } from "../models/wallet.model.js";
import generatePNR from "../utils/generatePNR.js";
import generateTicketPDF from "../utils/generateTicketPDF.js";
import { applySurgePricing } from "../utils/surgePricing.js";

export const bookFlight = async (req, res) => {
  try {
    const { flight_id, passenger_name } = req.body;

    const flight = await Flight.findOne({ flight_id });
    if (!flight) {
      return res.status(404).json({ message: "Flight not found" });
    }

    applySurgePricing(flight);
    await flight.save();

    let wallet = await Wallet.findOne();
    if (!wallet) wallet = await Wallet.create({});

    //check wallet have sufficient money for buying ticket
    if (flight.current_price > wallet.balance) {
      return res.status(400).json({ message: "Insufficient balance" });
    }

    wallet.balance -= flight.current_price;
    await wallet.save();

    

    const booking = await Booking.create({
      flight_id: flight.flight_id,
      airline: flight.airline,
      route: `${flight.departure_city} - ${flight.arrival_city}`,
      passenger_name,
      price_paid: flight.current_price,
      pnr: generatePNR(),
      pdf_path: "",
    });
    const pdfPath = generateTicketPDF(booking);
    booking.pdf_path = pdfPath;

    

    res.status(201).json({ success: true, booking });
  } catch (error) {
    res.status(500).json({ message: "Booking failed", error: error.message });
  }
};

export const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: bookings.length,
      bookings,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch bookings",
      error: error.message,
    });
  }
};

export const downloadTicket = async (req, res) => {
  try {
    const { pnr } = req.params;
    const booking = await Booking.findOne({ pnr });
    if(!booking || !booking.pdf_path) {
      return res.status(404).json({message: "Ticket not found"});
    }
    res.download(booking.pdf_path);

  } catch(error) {
    res.status(500).json({message: "Failed to download ticket", error: error.message});
  }
}
