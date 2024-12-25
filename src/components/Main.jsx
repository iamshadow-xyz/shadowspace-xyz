import Card from "./Card";

const Main = () => {
  return (
    <div className="max-w-5xl mx-auto mt-24 mb-20 p-4">
      <h1 className="sm:text-6xl text-2xl font-bold mb-4 text-center sm:mt-32 mt-8">
        Explore the World of Blogs With Shadowspace
      </h1>
      <p className="mb-4 text-center">
        We have curated a most detailed blogs, tech news, and Tutorials from the
        entire internet
      </p>
      <input
        type="text"
        placeholder="Search"
        className="p-4 border bg-transparent border-[#dadada30] w-full mb-20"
      />
      <h1 className="sm:text-4xl text-2xl font-bold mb-4">
        Blogs and articles:
      </h1>
      <Card />
    </div>
  );
};

export default Main;
