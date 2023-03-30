import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";

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
    console.log(data);
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

  return (
    <div className="flex flex-col h-screen justify-center items-center w-80 mx-auto">
      <div className="flex justify-center items-center w-full text-black py-3 px-6 rounded border border-solid border-gray-500">
        <form onSubmit={handleSearchArtists} className="flex items-center">
          <input
            type="text"
            placeholder="Search for an artist..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="border-none outline-none mx-auto"
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
    </div>
  );
};

export default Search;
