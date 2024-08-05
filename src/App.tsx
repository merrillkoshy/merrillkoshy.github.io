import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layout";
import DeutscLernenLayout from "./layout/deutschlernenpage";
import Deutsch from "./pages/deutsch";
import Lehrer from "./pages/deutsch/lehrer";
import Student from "./pages/deutsch/student";
import Profile from "./pages/profile";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  });

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Profile />} />
          <Route element={<DeutscLernenLayout />}>
            <Route path="/deutsch" element={<Deutsch />} />
            <Route path="/deutsch/lehrer" element={<Lehrer />} />
            <Route path="/deutsch/student" element={<Student />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
