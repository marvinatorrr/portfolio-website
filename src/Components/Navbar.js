import ToggleButton from "./ToggleButton";
import { GiKingJuMask } from "react-icons/gi";
import { BsGithub } from "react-icons/bs";

function Navbar() {
  return (
    <div className=" w-full h-14 flex justify-center fixed top-0 bg-opacity-75 backdrop-blur-sm	 bg-[#f5f0e8] dark:bg-[#202023] text-black dark:text-white text-base dark:bg-opacity-75 dark:backdrop-blur-sm">
      <div className=" w-[768px] flex justify-between ">
        <div className="flex">
          <div className="flex items-center text-xl mr-6  font-extrabold">
            <a href="#" className="ml-1 flex">
              <GiKingJuMask size={30} className="mr-1" />
              Marvin Ho
            </a>
          </div>
          <a
            href="asdf"
            className="mx-3 hover:underline underline-offset-2 flex items-center"
          >
            Works
          </a>
          <a
            href="asdf"
            className="mx-3 hover:underline underline-offset-2 flex items-center"
          >
            Posts
          </a>
          <a
            href="https://github.com/marvinatorrr/portfolio-website"
            className="mx-3 hover:underline underline-offset-2 flex items-center"
          >
            {<BsGithub className="mr-2" />}Source
          </a>
        </div>

        <div className="flex items-center">
          <ToggleButton></ToggleButton>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
