import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

function SocialMedia() {
  return (
    <div className="text-[#81e6d9]">
      <div>
        <a
          href="https://www.linkedin.com/in/marvin-ho-zq/"
          className="items-center my-2  flex w-[140px] hover:underline underline-offset-2 decoration-pink-500 hover:bg-cyan-200 rounded-full hover:bg-opacity-25"
        >
          <AiFillLinkedin size={20} className="mr-2" />
          @marvin-ho-zq
        </a>
      </div>
      <div>
        <a
          href="https://github.com/marvinatorrr"
          className="items-center my-2 flex w-min hover:underline underline-offset-2 decoration-pink-500 hover:bg-cyan-200 rounded-full hover:bg-opacity-25"
        >
          <AiFillGithub size={20} className="mr-2" />
          @marvinatorrr
        </a>
      </div>
    </div>
  );
}

export default SocialMedia;
