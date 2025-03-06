import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./src/components/NavBar.jsx";
import HomePage from "./src/pages/HomePage.jsx";
import ContactPage from "./src/pages/ContactPage.jsx";
import AboutPage from "./src/pages/AboutPage.jsx";
import ServicesPage from "./src/pages/ServicesPage.jsx";
import ScrollToTop from "./src/components/scrollEffect.jsx";
import Footer from "./src/components/Footer.jsx";

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
          <Route path="/service" element={<ServicesPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
