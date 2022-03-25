import { BsFillBriefcaseFill, BsFillBookFill } from "react-icons/bs";

function Button(props) {
  function RenderLogo(title) {
    switch (title) {
      case "My portfolio":
        return <BsFillBriefcaseFill className="ml-2" />;
      case "Popular posts":
        return <BsFillBookFill className="ml-2" />;
      default:
        console.log("hi");
        break;
    }
  }

  return (
    <button className="bg-[#81e6d9] w-[155px] h-[40px] text-black rounded-lg hover:bg-cyan-400 transition-colors duration-500 ease-out flex justify-center items-center">
      {props.text}
      {RenderLogo(props.text)}
    </button>
  );
}

export default Button;
