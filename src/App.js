import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage";
import Book from "./pages/BookPage";

function App() {
  const redirectTo = (url) => {
    window.open(url, "_blank");
  };

  return (
    <Router>
      <Home redirectTo={redirectTo} />
    </Router>
  );
}

export default App;
