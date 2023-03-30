import { Route, Routes } from "react-router-dom";
import ArtistsPage from "./pages/ArtistsPage";
import LoginPage from "./pages/LoginPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/artist-search" element={<ArtistsPage />} />
      </Routes>
    </>
  );
};

export default App;
