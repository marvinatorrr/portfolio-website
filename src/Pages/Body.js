import Card from "../Components/Card";
import Profile from "../Components/Profile";
import Header from "../Components/Header";
import WorkText from "../Components/WorkText";
import Button from "../Components/Button";
import BioText from "../Components/BioText";
import Hobbies from "../Components/Hobbies";
import SocialMedia from "../Components/SocialMedia";
import Post from "../Components/Post";

function Body() {
  return (
    <div>
      <Card />
      <Profile />
      <div className="flex  justify-center ">
        <div className="w-[485.5px] my-3">
          <Header title="Work" />
          <WorkText />
          <div className=" flex justify-center my-5">
            <Button text="My portfolio" />
          </div>
          <div className="my-5">
            <Header title="Bio" />
            <BioText />
          </div>
          <div className="my-5">
            <Header title="I ♥" />
            <Hobbies />
          </div>
          <Header title="On the web" />
          <SocialMedia />
        </div>
      </div>
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
    </div>
  );
}

export default Body;
