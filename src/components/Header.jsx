const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 border-b p-4 border-[#dadada30] backdrop-blur-md">
      <header className="flex items-center justify-between max-w-5xl mx-auto">
        <div className="brand flex items-center gap-2">
          <img className="w-12" src="/logo.svg" alt="" />
          <h1 className="text-2xl">Shadowspace</h1>
        </div>
        <div>
          <h1 className="block sm:hidden">Menu</h1>
          <nav className="sm:flex items-center space-x-4 hidden">
            <h1>Home</h1>
            <h1>About</h1>
            <h1>Services</h1>
            <h1>Contact</h1>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
