import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div className="max-w-2xl mx-auto mt-48">
      <form onSubmit={handleSubmit} className="p-4 border border-[#dadada30]">
        <h1 className="text-2xl mb-4">Login</h1>
        <div className="mb-4">
          <label className="block mb-2">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="p-2 border border-[#dadada30] w-full bg-transparent"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 border border-[#dadada30] w-full bg-transparent"
            required
          />
        </div>
        <button type="submit" className="p-2 bg-red-400 text-white w-full">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
