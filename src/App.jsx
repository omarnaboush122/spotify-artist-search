import { Route, Routes } from "react-router-dom";
import ArtistsPage from "./pages/ArtistsPage";
import LoginPage from "./pages/LoginPage";
import AlbumsPage from "./pages/AlbumsPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/artist-search" element={<ArtistsPage />} />
        <Route path="/artist-search/:id/albums" element={<AlbumsPage />} />
      </Routes>
    </>
  );
};

export default App;
