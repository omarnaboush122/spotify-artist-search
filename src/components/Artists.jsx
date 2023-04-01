import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import Artist from "./Artist";

const Artists = () => {
  const [artists, setArtists] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [token, setToken] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];
      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    setToken(token);
  }, []);

  const handleSearchArtists = async (e) => {
    e.preventDefault();

    if (!searchText) {
      setError("Please enter a search query.");
      return;
    }

    try {
      const { data } = await axios.get("https://api.spotify.com/v1/search", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          q: searchText,
          type: "artist",
        },
      });

      if (data.artists.items.length === 0) {
        setError("No artists found.");
        return;
      }

      setArtists(data.artists.items);
      setError("");
    } catch (err) {
      console.log(err);
    }
  };

  const artistsElements = artists.map((artist) => (
    <Artist key={artist.id} artist={artist} />
  ));

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <form
            onSubmit={handleSearchArtists}
            className="flex justify-center items-center"
          >
            <input
              type="text"
              placeholder="Search for an artist..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="py-2 px-3 border rounded-lg border-gray-400 focus:outline-none focus:border-green-500"
            />
            <button
              type="submit"
              className="ml-2 px-3 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:bg-green-600 transition duration-300 ease-in-out"
            >
              <FaSearch />
            </button>
          </form>
        </div>
      </div>
      {error && <p className="text-red-500 mt-2 text-center">{error}</p>}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {artistsElements}
        </div>
      </div>
    </div>
  );
};

export default Artists;
