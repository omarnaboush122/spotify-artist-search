import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Album from "./Album";

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

  const allAlbums = albums.map((album) => (
    <Album key={album.id} album={album} />
  ));

  return (
    <div className="p-8 my-5">
      <h2 className="text-lg font-bold mb-8">Albums</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {allAlbums}
      </div>
    </div>
  );
}

export default Albums;
