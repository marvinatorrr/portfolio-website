import { BsFillBriefcaseFill, BsFillBookFill } from "react-icons/bs";

function Button(props) {
  function RenderLogo(title) {
    switch (title) {
      case "My portfolio":
        return <BsFillBriefcaseFill className="ml-2" />;
      case "Posts":
        return <BsFillBookFill className="ml-2" />;
      default:
        break;
    }
  }

  return (
    <button className="bg-[#319795] dark:bg-[#8dede4] hover:dark:bg-[#4fd1c5] w-[155px] h-[40px] text-white dark:text-black rounded-lg hover:bg-[#2c7a7b] transition-colors duration-500 ease-out flex justify-center items-center ">
      {props.text}
      {RenderLogo(props.text)}
    </button>
  );
}

export default Button;
