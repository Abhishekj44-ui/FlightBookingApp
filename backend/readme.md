

# ✈️ Flight Booking Backend with:
1.Flight Search
2.Dynamic surge pricing 
3.Walllet System
4.Booking+pdf ticket generation


## 🚀 Tech Stack
- Node.js
- Express.js
- MongoDB + Mongoose
- PDFKit
- dotenv



# Booking flow 
1.User clicks book ticket
2.Backend logs booking attempt
3.Backend checks for surge rules
4.Calculates final price of ticket
5.Checks wallet balance
6.If balance is sufficient deducts balance
7.Creates booking record
8.Generate pdf
9.Returns success response



## 📂 Folder Structure
backend/
│
├── config/
│   └── db.js          (database connection)
│
├── models/
│   ├── flight.model.js
│   ├── wallet.model.js
│   └── booking.model.js
│ 
│
├── controllers/
│   ├── flight.controller.js
│   └── booking.controller.js
│  
│
├── routes/
│   ├── flight.routes.js
│   └── booking.routes.js
│ 
│
├── utils/
│   ├── surgePricing.js
│   ├── generatePNR.js
│   └── generateTicketPDF.js
│
├── tickets/            (generated PDFs)
│
├── seed/
│   └── seedFlights.js  # run this file once separately to seed Flights dummy data 
│
├── app.js
└── server.js





## .env

PORT=5000
MONGO_URI=mongodb+srv://..............


