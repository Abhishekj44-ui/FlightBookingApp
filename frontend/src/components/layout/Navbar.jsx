import Button from "../ui/Button";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <h2 className="text-2xl font-semibold">
          <span className="text-primary">Brand</span>Name
        </h2>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 text-sm text-primary">
          <a href="#" className="hover:text-white transition">
            Home
          </a>
          <a href="#" className="hover:text-white transition">
            Explore
          </a>
          <a href="#" className="hover:text-white transition">
            About
          </a>
        </div>

        {/* CTA */}
        <Button size="sm">Login</Button>

      </div>
    </nav>
  );
}