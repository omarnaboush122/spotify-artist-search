import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import SingleArtist from "./SingleArtist";

const Search = () => {
  const [artists, setArtists] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [token, setToken] = useState("");

  const handleSearchArtists = async (e) => {
    e.preventDefault();
    const { data } = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: searchText,
        type: "artist",
      },
    });
    setArtists(data.artists.items);
  };

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

  const artistsElements = artists.map((artist) => (
    <SingleArtist key={artist.id} artist={artist} />
  ));

  console.log(artists);
  return (
    <div className="flex flex-col min-h-screen justify-center items-center my-4">
      <div className="flex justify-between items-center w-80 mx-auto text-black py-3 px-6 rounded border border-solid border-gray-500">
        <form onSubmit={handleSearchArtists}>
          <input
            type="text"
            placeholder="Search for an artist..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full border-none outline-none"
          />
          <button type="submit" className="hidden"></button>
        </form>
        <div className="ml-4">
          <FaSearch
            size={30}
            className=" text-gray-300 cursor-pointer"
            onClick={handleSearchArtists}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8 p-8 mt-10 md:grid-cols-2 lg:grid-cols-4">
        {artistsElements}
      </div>
    </div>
  );
};

export default Search;
