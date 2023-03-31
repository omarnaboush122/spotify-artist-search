import React from "react";

const Album = ({album}) => {
  return (
    <div
      className="bg-white rounded-lg overflow-hidden shadow-lg"
    >
      <img
        src={album.images[0].url}
        alt={album.name}
        className="w-full h-52 object-cover"
      />
      <div className="flex flex-col">
        <div className="p-4">
          <h2 className="text-lg font-bold">{album.name}</h2>
          <h3 className="mb-8">{album.artists[0].name}</h3>
          <p className="text-gray-600">{album.release_date}</p>
          <p className="text-gray-600">{album.total_tracks} tracks</p>
        </div>
        <a
          href={album.external_urls.spotify}
          className="bg-gray-500 w-full p-3 text-white flex justify-center items-center"
        >
          Preview on Spotify
        </a>
      </div>
    </div>
  );
};

export default Album;
