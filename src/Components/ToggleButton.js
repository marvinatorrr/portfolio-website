import { CgSun } from "react-icons/cg";
import useDarkMode from "../Hooks/useDarkMode";

function ToggleButton() {
  const [colorTheme, setTheme] = useDarkMode();
  return (
    <button
      className="bg-[#fbd38d] w-[40px] h-[40px] rounded-lg flex justify-center items-center
     hover:bg-yellow-500 transition-colors duration-500 ease-out"
      onClick={() => {
        setTheme(colorTheme);
      }}
    >
      <CgSun color="black" />
    </button>
  );
}

export default ToggleButton;
