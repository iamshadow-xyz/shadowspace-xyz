import { Link } from "react-router-dom";
import Data from "../Data.js";
import fullStack from "../assets/full-stack.png";

const Card = () => {
  const truncateSummary = (summary, wordLimit) => {
    const words = summary.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return summary;
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 max-w-7xl mx-auto">
        {Data.map((data) => {
          return (
            <Link to={`/Post/${data.id}`} key={data.id}>
              <div className="border border-[#dadada30] mb-4 max-w-96">
                <div className="image">
                  <img
                    className="object-cover w-full"
                    src={fullStack}
                    alt="Card"
                  />
                </div>
                <div className="content">
                  <h1 className="text-2xl font-semibold mt-2 mb-2 px-4 text-red-400">
                    {data.title}
                  </h1>
                  <div className="author flex items-center justify-between px-4">
                    <div className="flex items-center gap-1">
                      <img
                        className="w-6 h-6 rounded-full"
                        src={data.authorImage}
                        alt={data.author}
                      />
                      <h1 className="text-sm font-semibold">{data.author}</h1>
                    </div>
                    <div>
                      <p className="text-xs mr-5 text-gray-500">
                        {data.publishedDate}
                      </p>
                    </div>
                  </div>
                  <p className="p-4">{truncateSummary(data.summary, 20)}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
