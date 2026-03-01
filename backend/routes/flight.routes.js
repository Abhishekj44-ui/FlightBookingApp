import express from "express";
import { getFlights } from "../controllers/flight.controller.js";

const router = express.Router();
router.get("/flights",getFlights);

export default router;
