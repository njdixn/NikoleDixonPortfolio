import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./src/components/Navbar";
import Home from "./src/pages/Home";
import Projects from "./src/pages/Projects";
import Resume from "./src/pages/Resume";
import Skills from "./src/pages/Skills";
import About from "./src/pages/About";
import "./styles.css";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function AnimatedRoutes() {
  return (
    <Routes>
      <Route path="/"         element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/resume"   element={<Resume />} />
      <Route path="/skills"   element={<Skills />} />
      <Route path="/about"    element={<About />} />
      {/* Catch-all → Home */}
      <Route path="*"         element={<Home />} />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div style={{ paddingTop: "58px" }}>
        <Navbar />
        <AnimatedRoutes />
      </div>
    </BrowserRouter>
  );
}
