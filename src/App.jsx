import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Post from "./pages/Post";
import Create from "./pages/Create";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create" element={<Create />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
