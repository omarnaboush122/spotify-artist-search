import { FaSpotify } from "react-icons/fa";

const Login = () => {
  const handleLogin = () => {
    const redirectUri = "http://localhost:5173/artist-search";
    const scope = "user-read-private user-read-email";

    const authorizeUrl = `https://accounts.spotify.com/authorize?client_id=97174f0ec88b4030962bb899ffe0df6c&response_type=token&redirect_uri=${encodeURIComponent(
      redirectUri
    )}&scope=${encodeURIComponent(scope)}`;

    window.location.href = authorizeUrl;
  };

  return (
    <div className="flex flex-col h-screen justify-center items-center w-80 mx-auto">
      <div
        className="flex justify-center items-center w-full text-black py-3 px-6 rounded border border-solid border-gray-500 cursor-pointer"
        onClick={handleLogin}
      >
        <p className="mx-auto text-2xl font-medium">Login</p>
        <div>
          <FaSpotify size={40} className="text-green-500" />
        </div>
      </div>
    </div>
  );
};

export default Login;
