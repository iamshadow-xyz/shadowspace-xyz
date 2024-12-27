import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 border-b p-4 border-[#dadada30] backdrop-blur-md z-50">
      <header className="flex items-center justify-between max-w-5xl mx-auto">
        <Link to="/">
          <div className="brand flex items-center gap-2">
            <img className="w-12" src="/shadowspace.svg" alt="Logo" />
            <h1 className="text-2xl">Shadowspace</h1>
          </div>
        </Link>
        <nav className="flex items-center gap-4">
          <Link to="/create">
            <h1>Create</h1>
          </Link>
          <Link to="/login">
            <h1>Login</h1>
          </Link>
          <Link to="/register">
            <h1 to="/register">Register</h1>
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default Header;
