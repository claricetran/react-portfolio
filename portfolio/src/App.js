import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import Resume from "./components/pages/Resume";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/react-portfolio/" element={<About />} />
                <Route path="/react-portfolio/portfolio" element={<Portfolio />} />
                <Route path="/react-portfolio/contact" element={<Contact />} />
                <Route path="/react-portfolio/resume" element={<Resume />} />
                <Route path="/react-portfolio/*" element={<h2>404 page not found.</h2>} />
            </Routes>
            <div style={{ flexGrow: "1" }}></div>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
