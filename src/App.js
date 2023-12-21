import NavBar from "./components/header/NavBar";
import CenterSection from "./components/center-section/CenterSection";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <CenterSection />
      <Footer />
    </Router>
  );
}

export default App;
