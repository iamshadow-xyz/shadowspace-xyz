const Hero = () => {
  return (
    <section className="max-w-5xl mx-auto p-4">
      <header className="text-center sm:mt-32 mt-24">
        <h1 className="sm:text-6xl text-2xl font-bold mb-4">
          Explore the World of Blogs With Shadowspace
        </h1>
        <p>
          We have curated the most detailed blogs, tech news, and tutorials from
          the entire internet.
        </p>
      </header>
      <div className="my-2 md:my-10">
        <input
          type="text"
          placeholder="Search"
          aria-label="Search"
          className="p-4 border bg-transparent border-[#dadada30] w-full"
        />
      </div>
    </section>
  );
};

export default Hero;
