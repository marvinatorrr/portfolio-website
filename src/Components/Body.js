import BioText from "./BioText";
import Button from "./Button";
import Card from "./Card";
import Header from "./Header";
import Hobbies from "./Hobbies";
import Profile from "./Profile";
import SocialMedia from "./SocialMedia";
import WorkText from "./WorkText";

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
    </div>
  );
}

export default Body;
