import { CgSun } from "react-icons/cg";
import { BsFillMoonFill } from "react-icons/bs";
import useDarkMode from "../Hooks/useDarkMode";

function ToggleButton() {
  function RenderLogo(theme) {
    if (theme === "dark") {
      return <BsFillMoonFill color="white" />;
    }
    return <CgSun color="black" />;
  }

  const [colorTheme, setTheme] = useDarkMode();
  return (
    <button
      className="bg-[#805ad5] dark:bg-[#fbd38d] w-[40px] h-[40px] rounded-lg flex justify-center items-center
     dark:hover:bg-yellow-500 transition-colors duration-500 ease-out hover:bg-[#744fc9]"
      onClick={() => {
        setTheme(colorTheme);
      }}
    >
      {RenderLogo(colorTheme)}
    </button>
  );
}

export default ToggleButton;
