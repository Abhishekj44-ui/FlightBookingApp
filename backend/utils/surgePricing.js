export const applySurgePricing = (flight) => {
    const now = new Date();

    if(flight.last_attempted_at && now - flight.last_attempted_at < 5 * 60 * 1000 ) {
        flight.attempt_count += 1;
    }
    else {
        flight.attempt_count = 1;
    }

    flight.last_attempted_at = now;

    //if attempts are greater than or equal to 3 then increase price by 10 %
    if(flight.attempt_count >= 3) {
        flight.current_price = Math.round(flight.base_price * 1.1);
    }

    // reset price after 10 minutes
    setTimeout( async () => {
        flight.current_price = flight.base_price;
        flight.attempt_count = 0;
        await flight.save();
    },10 * 60 * 1000);
};
