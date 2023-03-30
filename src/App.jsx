import { Route, Routes } from "react-router-dom";
import ArtistSearch from "./pages/ArtistSearch";
import LoginPage from "./pages/LoginPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/artist-search" element={<ArtistSearch />} />
      </Routes>
    </>
  );
};

export default App;
