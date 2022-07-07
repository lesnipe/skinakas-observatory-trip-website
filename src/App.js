import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BookPage from "./pages/BookPage";

function App() {
  const redirectTo = (url) => {
    window.open(url, "_blank");
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage redirectTo={redirectTo} />} exact />
        <Route path="/about-us" element={<h1>About us page</h1>} exact />
        <Route path="/experiences" element={<BookPage />} exact />
        <Route path="/gallery" element={<h1>Gallery page</h1>} exact />
        <Route path="/talk-to-us" element={<h1>Talk to us page</h1>} exact />
        <Route path="/attributors" element={<h1>Attributors page</h1>} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
