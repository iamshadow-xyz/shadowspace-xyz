import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="fixed top-0 left-0 right-0 border-b p-4 border-[#dadada30] backdrop-blur-md z-50">
      <header className="flex items-center justify-between max-w-5xl mx-auto">
        <div className="brand flex items-center gap-2">
          <img className="w-12" src="/logo.svg" alt="Logo" />
          <h1 className="text-2xl">Shadowspace</h1>
        </div>
        <div>
          <h1 className="block sm:hidden cursor-pointer" onClick={toggleMenu}>
            Menu
          </h1>
          <nav
            className={`sm:flex items-center min-h-screen justify-center text-center space-x-4 ${
              menuOpen ? "block" : "hidden"
            } absolute sm:static top-16 backdrop-blur-sm left-0 right-0 bg-black sm:bg-transparent p-4 sm:p-2`}
          >
            <h1 className="cursor-pointer">Home</h1>
            <h1 className="cursor-pointer">About</h1>
            <h1 className="cursor-pointer">Services</h1>
            <h1 className="cursor-pointer">Contact</h1>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
