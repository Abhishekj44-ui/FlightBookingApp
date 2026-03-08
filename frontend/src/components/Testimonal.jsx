const reviews = [
  {
    name: "Rahul Sharma",
    role: "Traveler",
    review:
      "Booking flights was super easy and the prices were great!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Patel",
    role: "Frequent Flyer",
    review:
      "Amazing experience! The website is fast and very easy to use.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Aman Verma",
    role: "Business Traveler",
    review:
      "I always find the best flight deals here. Highly recommended!",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20  px-6">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl text-primary font-bold mb-3">
          What Our Users Say
        </h2>

        <p className="text-gray-500 mb-12">
          Thousands of travelers trust Flyora for their trips.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl "
            >
              <p className="text-gray-600 mb-6">
                "{item.review}"
              </p>

              <div className="flex items-center gap-3">
                <img
                  src={item.image}
                  className="w-12 h-12 rounded-full"
                />

                <div className="text-left">
                  <h4 className="font-semibold">
                    {item.name}
                  </h4>

                  <p className="text-sm text-gray-500">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;