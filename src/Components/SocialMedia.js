import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

function SocialMedia() {
  return (
    <div className="dark:text-[#81e6d9] text-[#2c7a7b]">
      <div>
        <span className="whitespace-nowrap">
          <a
            href="https://www.linkedin.com/in/marvin-ho-zq/"
            className="items-center  flex w-min hover:underline underline-offset-2 decoration-pink-500 hover:bg-cyan-200 rounded-full hover:bg-opacity-25 p-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin size={20} className="mr-2" />
            @marvin-ho-zq
          </a>
        </span>
      </div>
      <div>
        <a
          href="https://github.com/marvinatorrr"
          className="items-center flex w-min hover:underline underline-offset-2 decoration-pink-500 hover:bg-cyan-200 rounded-full hover:bg-opacity-25 p-3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub size={20} className="mr-2" />
          @marvinatorrr
        </a>
      </div>
    </div>
  );
}

export default SocialMedia;
