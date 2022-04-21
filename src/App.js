import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import "./index.css";
import Body from "./Pages/Body";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Works from "./Pages/Works";
import { AnimatePresence } from "framer-motion";
import Post from "./Pages/Post";

function App() {
  const location = useLocation();
  return (
    <div className="bg-[#f0e7db] text-[#1a202c] dark:text-[#eee] font-serif pt-14 pb-3 text-base dark:bg-[#202023] transition duration-500 ease-out min-h-screen text-justify overflow-x-hidden">
      <Navbar />
      <Banner />
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route path="/works" element={<Works />} />
          <Route path="/" element={<Body />} />
          <Route path="/works/:id" element={<Post />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
