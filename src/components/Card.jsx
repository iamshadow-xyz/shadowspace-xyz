const Data = [
  {
    id: 1,
    title: "What is web development in 2023",
    summary:
      "Web development is undergoing rapid evolution as new technologies, tools, and methodologies emerge, and 2025 promises to be a transformative year. A central pillar of this evolution is the MERN stack (MongoDB, Express.js, React.js, and Node.js)",
    image: "full-stack.png",
    link: "https://tinted-scorpio-c3b.notion.site/What-is-Web-Development-in-2025-167441b417138044950dca9af4e5bd37?pvs=4",
  },
  {
    id: 2,
    title: "How to become a full-stack developer",
    summary:
      "A full-stack developer is a web developer or engineer who works with both the front and back ends of a website or application. They are proficient in both front-end and back-end languages and frameworks, as well as databases and servers.",
    image: "full-stack.png",
    link: "https://tinted-scorpio-c3b.notion.site/How-to-become-a-Full-Stack-Developer-6a9b4f6b7e4f4c3b9d3b2f5f6e0f1b8e?pvs=4",
  },
  {
    id: 3,
    title: "The future of web development",
    summary:
      "The future of web development is bright, with new technologies and tools emerging to make the process more efficient and user-friendly. Some of the key trends shaping the future of web development include AI and machine learning, voice search optimization, and the rise of progressive web apps.",
    image: "full-stack.png",
    link: "https://tinted-scorpio-c3b.notion.site/The-Future-of-Web-Development-7b3a3b6b6f9c4f4b8b9f4f5b5b6b5b6?pvs=4",
  },
  {
    id: 4,
    title: "The importance of web development",
    summary:
      "Web development is crucial for businesses and individuals looking to establish an online presence. A well-designed website can help attract customers, build brand awareness, and drive sales. It also allows businesses to provide valuable information and resources to their target audience.",
    image: "full-stack.png",
    link: "https://tinted-scorpio-c3b.notion.site/The-Importance-of-Web-Development-4c8b4f4b9b4f5b6b5b6b5b6b5b6b5b6?pvs=4",
  },
];

import fullStack from "../assets/full-stack.png";
const Card = () => {
  return (
    <div>
      {Data.map((data) => {
        return (
          <div
            key={data.id}
            className="border border-[#dadada30] grid grid-cols-1 md:grid-cols-2 gap-4 p-4 mb-4"
          >
            <div className="image">
              <img className="" src={fullStack} alt="Card" />
            </div>
            <div className="content">
              <h1 className="text-2xl font-semibold mb-2 text-red-400">
                {data.title}
              </h1>
              <p>{data.summary}</p>
              <a className="text-red-400" target="_blank" href={data.link}>
                <button className="border border-[#dadada30] p-2 mt-4">
                  Read More
                </button>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
