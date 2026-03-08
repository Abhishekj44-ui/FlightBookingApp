import { ShieldCheck, Clock, Search, BadgeDollarSign } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Fast Search",
    desc: "Find the best flights quickly with our smart search.",
  },
  {
    icon: BadgeDollarSign,
    title: "Best Prices",
    desc: "We compare hundreds of airlines to get the best deals.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Booking",
    desc: "Your payment and personal data are always safe.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    desc: "Our team is available anytime to help you.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-card px-6">
      <div className="max-w-6xl mx-auto text-center">
        
        <h2 className="text-3xl font-bold mb-3 text-primary">
          Why Choose Flyora
        </h2>

        <p className="text-gray-500 mb-12">
          We make flight booking simple, fast, and secure.
        </p>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-6 bg-black  rounded-xl border shadow-black hover:shadow-lg transition"
              >
                <Icon className="w-10 h-10 mx-auto text-primary mb-4" />

                <h3 className="font-semibold text-lg mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-500">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;