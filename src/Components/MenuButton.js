import { useContext } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { DarkModeContext } from "./Navbar";

function MenuButton() {
  const { colorTheme } = useContext(DarkModeContext);

  var logo;

  if (colorTheme === "dark") {
    logo = <AiOutlineMenu color="black" />;
  } else {
    logo = <AiOutlineMenu color="grey" />;
  }

  return (
    <button
      className="bg-[#f5f0e8] dark:bg-[#202023] w-[40px] h-[40px] rounded-lg flex justify-center items-center
      transition-colors duration-500 ease-out hover:bg-[#744fc9] border-2 dark:border-[#3a3a3d] ml-2 "
      onClick={() => {}}
    >
      {logo}
    </button>
  );
}

export default MenuButton;
