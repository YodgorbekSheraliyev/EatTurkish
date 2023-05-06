import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Single from "./Components/Single";
import Footer from "./Components/Footer";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/name/:name" element={<Single/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;