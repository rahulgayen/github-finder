import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";

import { GithubProvider } from "./context/github/GithubContext"

function App() {
  return (
    <GithubProvider>
      <Router>
        <div className="flex flex-col justify-between h-screen">
          <Navbar />
          <main className="container px-2 pb-12">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/notfound" element={<NotFound />} />
              <Route exact path="/*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </GithubProvider>
  );
}

export default App;
