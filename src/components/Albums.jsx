import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Albums() {
  const [albums, setAlbums] = useState([]);
  const [token, setToken] = useState("");
  const { id } = useParams();

  const fetchAlbums = async (id) => {
    try {
      const { data } = await axios.get(
        `https://api.spotify.com/v1/artists/${id}/albums`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setAlbums(data.items);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setToken(window.localStorage.getItem("token"));
  }, []);

  useEffect(() => {
    fetchAlbums(id);
  }, [id]);

  console.log(albums);

  return (
    <div className="p-8 my-5">
      <h2 className="text-lg font-bold mb-8">Albums</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {albums.map((album) => (
          <div
            key={album.id}
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
        ))}
      </div>
    </div>
  );
}

export default Albums;
