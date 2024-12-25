const Card = () => {
  return (
    <div className="border border-[#dadada30] p-4 mb-4">
      <h1 className="text-2xl font-semibold mb-2 text-red-400">
        What is web development in 2023
      </h1>
      <p>
        Web development is undergoing rapid evolution as new technologies,
        tools, and methodologies emerge, and 2025 promises to be a
        transformative year. A central pillar of this evolution is the MERN
        stack (MongoDB, Express.js, React.js, and Node.js)
      </p>
      <a
        className="text-red-400"
        target="_blank"
        href="https://tinted-scorpio-c3b.notion.site/What-is-Web-Development-in-2025-167441b417138044950dca9af4e5bd37?pvs=4"
      >
        <button className="border border-[#dadada30] p-2 mt-2">
          Read More
        </button>
      </a>
    </div>
  );
};

export default Card;
