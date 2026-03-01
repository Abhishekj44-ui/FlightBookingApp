import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';



const generateTicketPDF = (booking) => {
    const ticketsDir = path.join(process.cwd(),"tickets");

    //check if dir exist or not if not then create
    if(!fs.existsSync(ticketsDir)) {
        fs.mkdirSync(ticketsDir);
    }

    //file path
    const filePath = path.join(ticketsDir, `${booking.pnr}.pdf`);

    const doc = new PDFDocument();
    doc.pipe(fs.createWriteStream(filePath));

    // Add content to the PDF
    doc.fontSize(18).text("Flight Ticket", {align: 'center'});
    doc.moveDown();
    doc.fontSize(12).text(`PNR: ${booking.pnr}`)
    doc.text(`Passenger Name: ${booking.passangerName}`);
    doc.text(`Flight ID: ${booking.flight_id}`);
    doc.text(`Airline: ${booking.airline}`);
    doc.text(`Route: ${booking.route}`);
    doc.text(`Price Paid: $${booking.price_paid}`);
    doc.text(`Booking Date: ${new Date(booking.createdAt).toLocaleString()}`);

    doc.end();

    return filePath;

}


export default generateTicketPDF;