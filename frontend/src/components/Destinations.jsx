const destinations = [
  {
    city: "Dubai",
    country: "UAE",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
  },
  {
    city: "Paris",
    country: "France",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
  },
  {
    city: "Bali",
    country: "Indonesia",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
  {
    city: "London",
    country: "UK",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad",
  },
  {
    city: "New York",
    country: "USA",
    image: "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59",
  },
  {
    city: "Singapore",
    country: "Singapore",
    image: "https://images.unsplash.com/photo-1508962914676-134849a727f0",
  },
];

const Destinations = () => {
  return (
    <section className="py-16 px-6 ">
      
      <h2 className="text-3xl  font-bold text-center mb-10">
        Popular Destinations
      </h2>

      <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible max-w-6xl mx-auto">
        {destinations.map((item, index) => (
          <div
            key={index}
            className="min-w-50 md:min-w-0 relative rounded-xl overflow-hidden group cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.city}
              className="w-full h-60 object-cover group-hover:scale-110 transition duration-500"
            />

            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 text-white">
              <h3 className="text-xl font-semibold">{item.city}</h3>
              <p className="text-sm">{item.country}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Destinations;