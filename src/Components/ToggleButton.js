import { CgSun } from "react-icons/cg";

function ToggleButton() {
  return (
    <button
      className="bg-[#fbd38d] w-[40px] h-[40px] rounded-lg flex justify-center items-center
     hover:bg-yellow-500 transition-colors duration-500 ease-out"
    >
      <CgSun color="black" />
    </button>
  );
}

export default ToggleButton;
