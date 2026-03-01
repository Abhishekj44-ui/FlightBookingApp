import mongoose, { Schema } from "mongoose";


const walletSchema = new Schema({
     
    balance: {
        type: Number,
        default: 50000 // deafault balance of 50,000 units
    },
}, { timestamps: true});

export const Wallet = mongoose.model("Wallet", walletSchema);

