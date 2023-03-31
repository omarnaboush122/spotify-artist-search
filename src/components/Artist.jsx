import { Link } from "react-router-dom";

const Artist = ({ artist }) => {
  const renderStarRating = () => {
    return (
      <div className="star-rating">
        {[...Array(5)].map((_, index) => (
          <button
            key={index}
            type="button"
            className="text-black bg-transparent border-none outline-none cursor-pointer"
          >
            <span className="text-lg">&#9733;</span>
          </button>
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
