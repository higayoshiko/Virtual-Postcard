import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MakePostCard from "./components/makePostCard/makePostCard";
import SavedPostCard from "./components/savePage/savedPage";

function App({ authService }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={<MakePostCard authService={authService} />}
        />
        <Route
          path="/saved"
          element={<SavedPostCard authService={authService} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
