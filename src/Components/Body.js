import BioText from "./BioText";
import Header from "./Header";
import Hobbies from "./Hobbies";
import NavButton from "./NavButton";
import SocialMedia from "./SocialMedia";
import WorkText from "./WorkText";

function Body() {
  return (
    <div className="flex  justify-center ">
      <div className="w-[485.5px] my-3">
        <Header title="Work" />
        <WorkText />
        <div className=" flex justify-center my-5">
          <button className="bg-[#81e6d9] w-[155px] h-[40px] text-black rounded-lg hover:bg-cyan-400 transition-colors duration-500 ease-out">
            My portfolio {">"}{" "}
          </button>
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
  );
}

export default Body;
