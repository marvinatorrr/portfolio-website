import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
import Post from "./Components/Post";
import Footer from "./Components/Footer";
import "./index.css";
import Button from "./Components/Button";
import Body from "./Pages/Body";
import { Routes, Route } from "react-router-dom";
import Works from "./Pages/Works";
import Posts from "./Pages/Posts";

function App() {
  return (
    <div className="bg-[#f0e7db] text-[#1a202c] dark:text-[#eee] font-serif pt-14 pb-3 text-lg dark:bg-[#202023] transition duration-500 ease-out min-h-screen">
      <Navbar />
      <Banner />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/works" element={<Works />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
