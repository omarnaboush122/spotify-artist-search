import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const Artist = ({ artist }) => {
  const renderStarRating = () => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, index) => (
          <FaStar
          key={index}
          className={`star ${
            artist.popularity >= (index + 1) * 20 ? "text-[#fcd34d]" : ""
          }`}
        />
        ))}
      </div>
    );
  };

  return (
    <Link
      to={`/artist-search/${artist.id}/albums`}
      className="border border-solid border-gray-500 rounded-md"
    >
      <img
        src={artist.images[0].url}
        alt="artist-img"
        className="w-full h-52 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-medium mb-1">{artist.name}</h3>
        <p className="text-gray-500 mb-5">{artist.followers.total} followers</p>
        {renderStarRating()}
      </div>
    </Link>
  );
};

export default Artist;
