const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 border-b p-4 border-[#dadada30] backdrop-blur-md z-50">
      <header className="flex items-center justify-between max-w-5xl mx-auto">
        <div className="brand flex items-center gap-2">
          <img className="w-12" src="/shadowspace.svg" alt="Logo" />
          <h1 className="text-2xl">Shadowspace</h1>
        </div>
        <nav className="flex items-center gap-4">
          <h1>Login</h1>
          <h1>Register</h1>
        </nav>
      </header>
    </div>
  );
};

export default Header;
