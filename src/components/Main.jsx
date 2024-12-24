const Main = () => {
  const blogs = [
    {
      title: "The Evolution of Frontend Development",
      content:
        "A look at the evolution of frontend development and the tools of the trade.",
    },
    {
      title: "The Best Tech Podcasts",
      content:
        "A list of the best tech podcasts for staying up-to-date with the latest industry trends.",
    },
    {
      title: "The Best Tech News Sites",
      content:
        "A list of the best tech news sites for staying current with the latest industry news.",
    },
    {
      title: "The Best Tech Conferences",
      content:
        "A list of the best tech conferences to attend for learning and networking.",
    },
    {
      title: "The Best Tech Books",
      content:
        "A list of the best tech books for learning about software development and related topics.",
    },
    {
      title: "The Best Tech Communities",
      content:
        "A list of the best tech communities for networking and learning.",
    },
    {
      title: "The Best Tech Tools",
      content:
        "A list of the best tech tools for software development and related tasks.",
    },
    {
      title: "The Art of Studio Ghibli",
      content: "Exploring the timeless animations of Studio Ghibli.",
    },
    {
      title: "Anime in the 90s",
      content: "A deep dive into the anime boom of the 1990s.",
    },
    {
      title: "Anime Soundtracks That Inspire",
      content: "A look at some of the most inspiring anime soundtracks.",
    },
    {
      title: "Top 10 Shonen Anime",
      content: "Ranking the best Shonen anime of all time.",
    },
    {
      title: "Anime Soundtracks That Inspire",
      content: "A look at some of the most inspiring anime soundtracks.",
    },
    {
      title: "Top 10 Shonen Anime",
      content: "Ranking the best Shonen anime of all time.",
    },
    {
      title: "The Evolution of Anime Style",
      content: "How anime styles have changed over the decades.",
    },
    {
      title: "Anime and Pop Culture",
      content: "The influence of anime on global pop culture.",
    },
    {
      title: "Underrated Anime Gems",
      content: "Highlighting lesser-known anime that are worth watching.",
    },
    {
      title: "Anime Conventions: A Growing Trend",
      content: "The rise of anime conventions worldwide.",
    },
    {
      title: "The Impact of Anime on Fashion",
      content: "How anime is shaping modern fashion trends.",
    },
  ];

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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs.map((blog, index) => (
          <div key={index} className="card border border-[#dadada30] p-4">
            <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
            <p>{blog.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
