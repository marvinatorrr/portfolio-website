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
      <div className="mx-6">
        <Card />
        <Profile />
        <div className="flex justify-center">
          <div className="my-3">
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
        <div className="flex justify-center items-center">
          <div className="grid grid-rows-2 grid-flow-col">
            <Link to="works/mindset">
              <Thumbnail post="mindset" />
            </Link>
            <Link to="works/avensys">
              <Thumbnail post="avensys" />
            </Link>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}

export default Body;
