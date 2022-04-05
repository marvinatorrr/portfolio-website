import Card from "../Components/Card";
import Profile from "../Components/Profile";
import Header from "../Components/Header";
import WorkText from "../Components/WorkText";
import Button from "../Components/Button";
import Hobbies from "../Components/Hobbies";
import SocialMedia from "../Components/SocialMedia";
import Thumbnail from "../Components/Thumbnail";
import AnimatedPage from "./AnimatePage";
import { Link } from "react-router-dom";

function Body() {
  return (
    <AnimatedPage>
      <div>
        <Card />
        <Profile />
        <div className="flex  justify-center ">
          <div className="w-[485.5px] my-3">
            <Header title="Work" underline={true} />
            <WorkText />
            <div className=" flex justify-center my-5">
              <Link to="works">
                <Button text="My portfolio" />
              </Link>
            </div>

            <div className="my-5">
              <Header title="I ♥" underline={true} />
              <Hobbies />
            </div>
            <Header title="On the web" underline={true} />
            <SocialMedia />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-rows-1 grid-flow-col gap-4">
            <Link to="posts/mindset">
              <Thumbnail post="mindset" />
            </Link>
            <Link to="works/avensys">
              <Thumbnail post="avensys" />
            </Link>
          </div>
        </div>
        <div className="flex justify-center my-5">
          <Link to="posts">
            <Button text="Posts" />
          </Link>
        </div>
      </div>
    </AnimatedPage>
  );
}

export default Body;
