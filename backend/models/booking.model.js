import mongoose, { Schema } from "mongoose";

const bookingSchema = new Schema(
  {
  
    passenger_name: {
      type: String,
      required: true,
    },
    flight_id: {
      type: String,
      required: true,
    },
    airline: {
      type: String,
      required: true,
    },
    route: {
      type: String,
      required: true,
    },
    price_paid: {
      type: Number,
      required: true,
    },
    pnr: {
      type: String,
      required: true,
      unique: true,
    },
    pdf_path: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Booking = mongoose.model("Booking", bookingSchema);
