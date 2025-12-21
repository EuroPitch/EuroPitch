import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Landing from "./pages/Landing/Landing";
import About from "./pages/About/About";
import Competition from "./pages/Competition/Competition";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/404";
import Registration from "./pages/Registration/Registration";
import Trading from "./pages/Trading/Trading";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* All pages that share the Header/Footer */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="about" element={<About />} />
          <Route path="competition" element={<Competition />} />
          <Route path="contact" element={<Contact />} />
          <Route path="register" element={<Registration />} />
          <Route path="/trading" element={<Trading />} />
        </Route>

        {/* Fallback 404 route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

