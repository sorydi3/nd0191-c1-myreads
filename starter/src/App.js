import "./App.css";
import Search from "./search/search";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./mainpage";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
