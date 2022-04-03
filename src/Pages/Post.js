import { useParams, useNavigate } from "react-router-dom";
import AnimatedPage from "./AnimatePage";
import { AiOutlineRight } from "react-icons/ai";

function Post() {
  var dict = {
    mindset: {
      title: "Life Long Learning",
      description: "some description",
      platform: (
        <div>
          <div className="my-4 ]">
            <span className="bg-[#34403a] rounded-sm text-sm text-[#9ae6b4] p-1 mr-2 font-bold">
              WEBSITE
            </span>
            <span>
              <a
                href="https://www.singaporetech.edu.sg/digitalnewsroom/lifelong-learning-is-key-to-success/"
                className="text-[#d657a5] hover:underline underline-offset-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.singaporetech.edu.sg/digitalnewsroom/lifelong-learning-is-key-to-success/
              </a>
            </span>
          </div>
          <div className="my-4"></div>
        </div>
      ),
      blogpost: "",
      img: "../Resources/PostImages/speech.jpg",
    },
    avensys: {
      title: "Avensys Consulting",
      description:
        "Building .NET Core applications following an agile methodology.",
      platform: (
        <div>
          <div className="my-4">
            <span className="bg-[#34403a] rounded-sm text-sm text-[#9ae6b4] p-1 mr-2 font-bold">
              WEBSITE
            </span>
            <span>
              <a
                href="https://aven-sys.com"
                className="text-[#d657a5] hover:underline underline-offset-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://aven-sys.com
              </a>
            </span>
          </div>
          <div className="my-4">
            <span className="bg-[#34403a] rounded-sm text-sm text-[#9ae6b4] p-1 mr-2 font-bold">
              STACK
            </span>
            <span>
              .NET Core 3.1, Entity Core, REST API, Azure DevOps, Event Hub, MS
              SQL, xUnit, Application Insights
            </span>
          </div>
        </div>
      ),
      blogpost: "some blogpost",
      stack: "some stack",
      img: "../Resources/PostImages/avensys.png",
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
        <div className="w-[485.5px] mt-4">
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
              <div className="font-bold">{postinfo.title}</div>
            </div>
          </p>
          <p className="mt-2">{postinfo.description}</p>
          <p className="ml-4">{postinfo.platform}</p>
        </div>
      </div>
    </AnimatedPage>
  );
}

export default Post;
