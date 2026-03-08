import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-12">

      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">

        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Flyora
          </h2>

          <p className="text-sm text-gray-400">
            Your trusted platform for booking flights worldwide.
            Fast, secure, and affordable travel booking.
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Company
          </h3>

          <ul className="space-y-2 text-sm">
            <li className="hover:text-primary cursor-pointer">About</li>
            <li className="hover:text-primary cursor-pointer">Careers</li>
            <li className="hover:text-primary cursor-pointer">Blog</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Support
          </h3>

          <ul className="space-y-2 text-sm">
            <li className="hover:text-primary cursor-pointer">Help Center</li>
            <li className="hover:text-primary cursor-pointer">Contact Us</li>
            <li className="hover:text-primary cursor-pointer">FAQs</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Follow Us
          </h3>

          <div className="flex gap-4">
            <Facebook className="cursor-pointer hover:text-primary" />
            <Twitter className="cursor-pointer hover:text-primary" />
            <Instagram className="cursor-pointer hover:text-primary" />
            <Linkedin className="cursor-pointer hover:text-primary" />
          </div>
        </div>

      </div>

      {/* bottom */}

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Flyora. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;