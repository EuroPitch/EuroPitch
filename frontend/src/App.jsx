import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Landing from "./pages/Landing/Landing";
import About from "./pages/About/About";
import Competition from "./pages/Competition/Competition";
import NotFound from "./pages/404";
import Trading from "./pages/Trading/Trading";
import Contact from "./pages/Contact/Contact";
import Societies from "./pages/Societies/Societies";
import Sponsors from "./pages/Sponsors/Sponsors";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* All pages that share the Header/Footer */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="about" element={<About />} />
          <Route path="competition" element={<Competition />} />
          <Route path="trading" element={<Trading />} />
          <Route path="contact" element={<Contact />} />
          <Route path="societies" element={<Societies />} />
          <Route path="sponsors" element={<Sponsors />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

