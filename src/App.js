import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Event from "./pages/Event.js";
import Contact from "./pages/Contact.js";
import Donate from "./pages/Donate";
import ScrollToTop from "./components/ScrollToTop.js"
function App() {
  return (
    <>
      
      <Router>
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/event" element={<Event />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/donate" element={<Donate />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
