import ToggleButton from "./ToggleButton";
import { GiKingJuMask } from "react-icons/gi";
import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="h-14 flex justify-center fixed top-0 bg-opacity-75 backdrop-blur-sm	 bg-[#f5f0e8] dark:bg-[#202023] text-black dark:text-white text-base dark:bg-opacity-75 dark:backdrop-blur-sm z-50">
      <div className="flex w-screen justify-between">
        <div className="flex ml-2">
          <div className="flex items-center text-xl font-extrabold">
            <Link to="/" className="flex">
              <GiKingJuMask size={30} className="mr-1" />
              Marvin Ho
            </Link>
          </div>
          {/* <Link
            to="works"
            className="mx-3 hover:underline underline-offset-2 flex items-center"
          >
            Works
          </Link> */}

          {/* <a
            href="https://github.com/marvinatorrr/portfolio-website"
            className="mx-3 hover:underline underline-offset-2 flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            {<BsGithub className="mr-2" />}Source
          </a> */}
        </div>

        <div className="flex items-center mr-2">
          <ToggleButton></ToggleButton>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
