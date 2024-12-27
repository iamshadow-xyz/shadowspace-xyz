import Data from "../Data.js";
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
