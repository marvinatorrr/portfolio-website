import { useParams, useNavigate } from "react-router-dom";
import AnimatedPage from "./AnimatePage";
import { AiOutlineRight } from "react-icons/ai";

function Post() {
  var dict = {
    mindset: {
      title: "Life Long Learning",
      description: "some description",
      platform: "some platform",
      blogpost:
        "https://www.singaporetech.edu.sg/digitalnewsroom/lifelong-learning-is-key-to-success/",
      stack: "some stack",
      img: "../Resources/PostImages/speech.jpg",
    },
    avensys: {
      title: "Avensys Consulting",
      description: ".NET Core Software Engineer",
      platform: "some platform",
      blogpost: "some blogpost",
      stack: "some stack",
      img: "../Resources/PostImages/avensys.jpg",
    },
    post3: {
      title: "Life Long Learning",
      description: "some description",
      platform: "some platform",
      blogpost: "some blogpost",
      stack: "some stack",
      img: "../Resources/PostImages/Post1.png",
    },
    post4: {
      title: "title of post 4",
      description: "some description",
      platform: "some platform",
      blogpost: "some blogpost",
      stack: "some stack",
      img: "../Resources/PostImages/Post1.png",
    },
  };

  const { id } = useParams();
  const navigate = useNavigate();
  var postinfo = dict[id];

  return (
    <AnimatedPage>
      <div className="flex w-full justify-center">
        <div className="w-[485.5px]">
          <p>
            <div className="flex items-center">
              {
                <button onClick={() => navigate(-1)}>
                  <span className="text-[#d657a5] hover:underline underline-offset-2">
                    Works
                  </span>
                </button>
              }
              {<AiOutlineRight size={12} className="mx-2" />}
              {postinfo.title}
            </div>
          </p>
          <p>{postinfo.description}</p>
          <p>{postinfo.platform}</p>
          <p>{postinfo.blogpost}</p>
          <p>{postinfo.stack}</p>
          <img
            src={postinfo.img}
            alt="some post"
            className="rounded-md my-2"
          ></img>
        </div>
      </div>
    </AnimatedPage>
  );
}

export default Post;
