import ToggleButton from "./ToggleButton";
import { GiKingJuMask } from "react-icons/gi";

function Navbar() {
  return (
    <div className=" w-full h-14 flex justify-center fixed top-0 bg-opacity-75 backdrop-blur-sm	 bg-[#f5f0e8] dark:bg-[#202023] text-black dark:text-white text-base dark:bg-opacity-75 dark:backdrop-blur-sm">
      <div className=" w-[768px] flex justify-between ">
        <div className="flex">
          <div className="flex items-center text-xl mr-6  font-extrabold">
            <button className="ml-1 flex">
              {" "}
              <GiKingJuMask size={30} className="mr-1" />
              Marvin Ho
            </button>
          </div>
          <button className="mx-3 hover:underline underline-offset-2">
            Works
          </button>
          <button className="mx-3 hover:underline underline-offset-2">
            Posts
          </button>
          <button className="mx-3 hover:underline underline-offset-2">
            Source
          </button>
        </div>

        <div className="flex items-center">
          <ToggleButton></ToggleButton>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
