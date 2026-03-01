import mongoose, { Schema } from "mongoose";

const flightSchema = new Schema(
  {
    flight_id: {
      required: true,
      type: String,
      unique: true,
    },
    airline: {
      type: String,
      required: true,
    },
    departure_city: {
      type: String,
      required: true,
    },
    arrival_city: {
      type: String,
      required: true,
    },
    base_price: {
      type: Number,
      required: true,
    },
    current_price: {
      type: Number,
      required: true,
    },
    attempt_count: {
      type: Number,
      default: 0,
    },
    last_attempted_at: {
      type: Date,
    },
  },
  { timestamps: true }
);

export const Flight = mongoose.model("Flight", flightSchema);
