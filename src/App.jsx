import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ScrollToTop from "./components/scrollEffect.jsx";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-lightGray min-h-screen ">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
