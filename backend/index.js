import dotenv from "dotenv"
dotenv.config({
    path: './.env'
});
import {app} from './app.js'
import flightRoutes from "./routes/flight.routes.js"
import boookingRoutes from "./routes/booking.routes.js"
import connectDB from "./config/db.js"


connectDB();


//Flight Api
app.use("/api",flightRoutes);

//booking api
app.use("/api/bookings",boookingRoutes);


const PORT = process.env.PORT || 5000
app.listen(PORT,() => {
    console.log(`server is listening on port ${PORT}`);
})