

const Album = ({ album }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
      <img
        src={album.images[0].url}
        alt={album.name}
        className="w-full h-52 object-cover"
      />
      <div className="p-4 flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-bold mb-2">{album.name}</h2>
          <h3 className="text-gray-600">{album.artists[0].name}</h3>
          <p className="text-gray-600">{album.release_date}</p>
          <p className="text-gray-600">{album.total_tracks} tracks</p>
        </div>
        <a
          href={album.external_urls.spotify}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full w-full text-center mt-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          Preview on Spotify
        </a>
      </div>
    </div>
  );
};

export default Album;
