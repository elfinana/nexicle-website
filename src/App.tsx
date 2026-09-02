import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import ProcedureAI from "./pages/ProcedureAI";
import ControlXR from "./pages/ControlXR";
import Healthcare from "./pages/Healthcare";
import Defense from "./pages/Defense";
import Technology from "./pages/Technology";
import Manufacturing from "./pages/Manufacturing";
import Contact from "./pages/Contact";
import Partners from "./pages/Partners";
import Updates from "./pages/Updates";
import UpdateDetail from "./pages/UpdateDetail";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/procedure-ai" element={<ProcedureAI />} />
          <Route path="/controlxr" element={<ControlXR />} />
          <Route path="/healthcare" element={<Healthcare />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/defense" element={<Defense />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/manufacturing" element={<Manufacturing />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="/updates/:id" element={<UpdateDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
