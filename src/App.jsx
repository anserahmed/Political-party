import "./App.css";
import { Carousel } from "flowbite-react";

import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage.jsx";
import Contact from "./components/Contact.jsx";
import { Routes, BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className=" App text">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
