import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Home from './pages'

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
