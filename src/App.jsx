import { Routes, Route, Link, useLocation } from "react-router-dom";
import Blue from "./components/Blue";
import Red from "./components/Red";
import Purple from "./components/Purple";
import Green from "./components/Green";
import Orange from "./components/Orange";
import Home from "./components/Home";
import { AnimatePresence } from "framer-motion";
import "./App.css";

function App() {
  const location = useLocation();

  return (
    <div id="container">
      <div id="navbar">
        <Link to="/">Home</Link>
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
        <Link to="/purple">Purple</Link>
        <Link to="/green">Green</Link>
        <Link to="/orange">Orange</Link>
      </div>
      <div id="main-section">
        <AnimatePresence mode="wait">
          <Routes key={location.pathname} location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/blue" element={<Blue />} />
            <Route path="/red" element={<Red />} />
            <Route path="/purple" element={<Purple />} />
            <Route path="/green" element={<Green />} />
            <Route path="/orange" element={<Orange />} />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
