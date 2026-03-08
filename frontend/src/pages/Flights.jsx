import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom"
import { getFlights } from "../services/api";

const Flights = () => {

  const [searchParams] = useSearchParams();
  const [flights,setFlights] = useState([]);
  const [loading,setLoading] = useState(false);

  const departure = searchParams.get("departure");
  const arrival = searchParams.get("arrival");
  
  useEffect(() => {
      const fetchFlights = async () => {
        try {
          setLoading(true);
          const data = await getFlights({departure,arrival});
          setFlights(data.data);
        } catch (error) {
          console.log(error)
        } finally {
          setLoading(false);
        }
      }
      fetchFlights()
  },[departure,arrival])
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">
        Available Flights
      </h1>

      {loading && <p>Loading...</p>}

      {!loading && flights.length === 0 && (
        <p>No flights found.</p>
      )}

      <div className="grid gap-4">
        {flights.map((flight) => (
          <div
            key={flight._id}
            className="border p-4 rounded shadow flex justify-between items-center"
          >
            <div>
              <h2 className="font-semibold">
                {flight.airline}
              </h2>
              <p>
                {flight.departure_city} → {flight.arrival_city}
              </p>
            </div>

            <div className="text-right">
              <p className="font-bold text-primary">
                ₹{flight.current_price}
              </p>

              <button className="mt-2 bg-primary text-white px-4 py-1 rounded">
                Book
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Flights;