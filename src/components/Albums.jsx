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
    <div className="p-4 my-5">
      {/* <h1>{albums[0].artists[0].name}</h1> */}
      {/* <h2>{albums[0].album_type}</h2> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {albums.map((album) => (
          <div
            key={album.id}
            className="bg-white rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={album.images[0].url}
              alt={album.name}
              className="w-full"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold">{album.name}</h2>
              <p className="text-gray-600">{album.release_date}</p>
              <p className="text-gray-600">{album.total_tracks} tracks</p>
            </div>
            <a
              href={album.external_urls.spotify}
              className="bg-gray-500 w-full text-white flex justify-center items-center"
            >
              preview on spotify
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Albums;
