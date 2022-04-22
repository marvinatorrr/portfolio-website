import { useContext, useRef, useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { DarkModeContext } from "./Navbar";
import { BsGithub, BsFillArchiveFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

function MenuButton() {
  function DropDownMenu() {
    return (
      <div className="bg-white dark:bg-[#2d3748] w-[150px] h-[128px] rounded-lg border-2 border-gray-500 shadow-xl">
        <div className="grid grid-cols-1 my-2 ">
          <div className="h-[36px] px-4 flex items-center active:bg-red-300  hover:underline underline-offset-2">
            <Link to="/" className="flex items-center w-full h-full">
              <AiFillHome className="mr-2" />
              Home
            </Link>
          </div>
          <div className="h-[36px] px-4 flex items-center active:bg-red-300 hover:underline underline-offset-2">
            <Link to="/works" className="flex items-center w-full h-full">
              <BsFillArchiveFill className="mr-2" />
              Works
            </Link>
          </div>
          <div className="h-[36px] px-4 flex items-center active:bg-red-300 hover:underline underline-offset-2">
            <a
              href="https://github.com/marvinatorrr/portfolio-website"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <div className="flex items-center">
                <div className="mr-2">{<BsGithub />}</div>
                <div>Source</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }

  const { colorTheme } = useContext(DarkModeContext);
  const [menuOpen, setMenu] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (menuOpen && ref.current && !ref.current.contains(e.target)) {
        setMenu(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [menuOpen]);

  var logo;

  if (colorTheme === "dark") {
    logo = <AiOutlineMenu color="black" />;
  } else {
    logo = <AiOutlineMenu color="grey" />;
  }

  const location = useLocation();

  useEffect(() => {
    setMenu(false);
  }, [location]);

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-25%" },
  };

  return (
    <div ref={ref}>
      <button
        className="bg-[#f5f0e8] dark:bg-[#202023] w-[40px] h-[40px] rounded-lg flex justify-center items-center
      transition-colors duration-500 ease-out hover:bg-[#744fc9] border-2 dark:border-[#3a3a3d] ml-2 "
        onClick={() => {
          setMenu((menuOpen) => !menuOpen);
        }}
      >
        {logo}
      </button>
      <div className="absolute top-14 right-0">
        <motion.nav
          initial={false}
          animate={menuOpen ? "open" : "closed"}
          variants={variants}
        >
          <DropDownMenu />
        </motion.nav>
      </div>
    </div>
  );
}

export default MenuButton;
