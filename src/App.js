import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
import Post from "./Components/Post";
import Footer from "./Components/Footer";
import "./index.css";
import Body from "./Components/Body";
import Button from "./Components/Button";

function App() {
  return (
    <div className="bg-[#f0e7db] text-[#1a202c] dark:text-[#eee] font-serif pt-14 pb-3 text-lg dark:bg-[#202023] transition duration-500 ease-out">
      <Navbar />
      <Banner />

      <Body />
      <div className="flex justify-center">
        <div className="grid grid-rows-1 grid-flow-col gap-4">
          <div>
            <Post
              title="Life as a Dev"
              description="My Youtube Channel"
              imagesrc="../Resources/PostImages/Post1.png"
              imagealt="some description"
            />
          </div>
          <div>
            <Post
              title="Post 2"
              description="some other description"
              imagesrc="../Resources/PostImages/Post1.png"
              imagealt="some description 2"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center my-5">
        <Button text="Popular posts" />
      </div>

      <Footer />
    </div>
  );
}

export default App;
