import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import Profile from "./Components/Profile";
import Post from "./Components/Post";
import Footer from "./Components/Footer";
import "./index.css";
import Body from "./Components/Body";

function App() {
  return (
    <div className="bg-[#202023] text-[#eee] font-serif pt-14 pb-3 text-base">
      <Navbar />
      <Banner />
      <Card />
      <Profile />
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
        <button className="bg-[#81e6d9] w-[155px] h-[40px] text-black rounded-lg hover:bg-cyan-400 transition-colors duration-500 ease-out">
          My portfolio {">"}{" "}
        </button>
      </div>

      <Footer />
    </div>
  );
}

export default App;
