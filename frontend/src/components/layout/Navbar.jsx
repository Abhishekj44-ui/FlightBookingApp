import { useState } from "react";
import Icon from "../ui/Icon";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const menuItems = [
    { name: "Home", link: "#" },
    //{ name: "Flights", link: "#flights" },
    { name: "Contact", link: "#contact" },
    // { name: "Login", link: "#login" },
  ];
  return (
    <nav className="fixed top-0 left-0 bg-black/60 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Icon name="Logo" color="text-primary" className="md:h-12 md:w-12 " />
          <span className="md:text-xl font-semibold">Flyora</span>
        </div>

        {/* Menu */}
        <div className="hidden md:flex items-center gap-8 text-white">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="hover:text-primary transition"
            >
              {item.name}
            </a>
          ))}

          <p
            onClick={() => navigate("/flights")}
            className="hover:text-primary transition cursor-pointer"
          >
            Flights
          </p>
          <a href="#login" className="hover:text-primary transition">
            login
          </a>
        </div>

        {/* Mobile Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name="Menu" size="md" color="text-white" />
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-black/10 text-sm py-3 ">
          <div className="flex flex-col px-5 divide-y divide-white/20">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="py-3 hover:text-primary transition"
              >
                {item.name}
              </a>
            ))}
            <p
              onClick={() => navigate("/flights")}
              className="hover:text-primary py-3 transition"
            >
              Flights
            </p>
            <a
             
              href="#login"
              className="hover:text-primary py-3 transition"
            >
              login
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
