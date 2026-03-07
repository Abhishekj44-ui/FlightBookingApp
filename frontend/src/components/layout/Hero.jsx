

import Button from "../ui/Button";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage: "url('/image.png')",
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-20 flex flex-col min-h-screen">
        
        <Navbar />

        <div className="flex-1 flex items-center justify-center text-center px-6">

          <div className="max-w-5xl flex flex-col items-center gap-6">

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Explore The World With{" "}
              <span className="text-primary">Flyora</span>
            </h1>

            <p className="text-gray-200 text-lg max-w-xl">
              Book flights easily and travel to your dream destinations.
            </p>

           

           
           <a href="#flights">
            <Button  >
              Book Now
            </Button>
           </a>
            

          </div>

        </div>

      </div>
    </section>
  );
};


export default Hero