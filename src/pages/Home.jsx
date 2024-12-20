import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      {/* breadcrum */}
      <div className="mt-4 flex flex-col gap-4">
        <div className="flex gap-2">
          <Link to="/">Home</Link>
          <span>-</span>
          <span className="text-red-400">Trending blog posts</span>
        </div>
      </div>
      {/* introduction */}
      <div className="mt-6 text-center">
        <h1 className="text-2xl font-bold">Trending blog posts</h1>
        <p className="text-gray-300 text-lg">
          Welcome to the trending blog posts
        </p>
      </div>
    </div>
  );
};

export default Home;
