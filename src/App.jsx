import "./App.css";


import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage.jsx";
import Contact from "./components/Contact.jsx";
import Join from "./components/Join.jsx";
import Join2 from "./components/Join2.jsx";
import Join3 from "./components/Join3.jsx";
import { Routes, BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className=" App text">
      <BrowserRouter>
        <Navbar />
        <Routes >
          <Route path="/" element={<LandingPage />} />
          <Route path="/join" element={<Join />} />
          <Route path="/join2" element={<Join2 />} />
          <Route path="/join3" element={<Join3 />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
