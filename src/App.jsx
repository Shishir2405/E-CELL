import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  About,
  Contact,
  Events,
  Gallery,
  Home,
  Navbar,
  StarsCanvas,
  Team,
  Footer,
  Mission,
  Vision,
  EurekaRegister,
} from "./Components";
import { useState, useEffect } from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import Blog from "./Components/Blog";
import Blog1 from "./Components/Blog1";
import Blog2 from "./Components/Blog2";
import Blog3 from "./Components/Blog3";
import Blog4 from "./Components/Blog4";
import Blog5 from "./Components/Blog5";
import Blog6 from "./Components/Blog6";
import Blog7 from "./Components/Blog7";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App bg-primary">
      {loading ? (
        <div className="flex justify-center items-center text-center bg-primary w-full h-screen">
          <ClimbingBoxLoader
            color="#ffffff"
            size={20}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <BrowserRouter>
          <Navbar />
          <StarsCanvas />
          <Routes>
            <Route
              path="/"
              element={
                <div className="relative z-0 bg-primary">
                  <Home />
                  <About />
                  <Mission />
                  <Vision />
                  <Events />
                  <Gallery />
                  <Blog />
                  <div className="relative z-0 bg-primary">
                    <StarsCanvas />
                    <Contact setLoading={setLoading} loading={loading} />
                  </div>
                </div>
              }
            />
            <Route path="/team" element={<Team />} />
            <Route path="/blog1" element={<Blog1 />} />
            <Route path="/blog2" element={<Blog2 />} />
            <Route path="/blog3" element={<Blog3 />} />
            <Route path="/blog4" element={<Blog4 />} />
            <Route path="/blog5" element={<Blog5 />} />
            <Route path="/blog6" element={<Blog6 />} />
            <Route path="/blog7" element={<Blog7 />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
