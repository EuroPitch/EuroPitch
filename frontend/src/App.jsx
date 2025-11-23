import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Competition from "./pages/Competition";
import Conference from "./pages/Conference";
import Contact from "./pages/Contact";
import NotFound from "./pages/404";
import Registration from "./pages/Registration";
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
          <Route path="conference" element={<Conference />} />
          <Route path="contact" element={<Contact />} />
          <Route path="register" element={<Registration />} />
        </Route>

        <Route path="/trading" element={<Trading />} />

        {/* Fallback 404 route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

