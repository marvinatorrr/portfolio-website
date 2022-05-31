import { useParams, useNavigate } from "react-router-dom";
import AnimatedPage from "./AnimatePage";
import { AiOutlineRight } from "react-icons/ai";

function Post() {
  var dict = {
    mindset: {
      title: "Life Long Learning",
      description:
        "I am a firm believer of adopting a growth mindset to constantly push the boundaries.",
      platform: (
        <div>
          <div className="my-4 ]">
            <span className="bg-[#34403a] rounded-sm text-sm text-[#9ae6b4] p-1 mr-2 font-bold">
              WEBSITE
            </span>
            <span>
              <a
                href="https://www.singaporetech.edu.sg/digitalnewsroom/lifelong-learning-is-key-to-success/"
                className="text-[#d657a5] hover:underline underline-offset-2 break-words"
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
      img: (
        <div>
          <img
            className="rounded-xl"
            src="../Resources/PostImages/speech.jpg"
            alt="some stuff"
          ></img>
        </div>
      ),
    },
    worldskills: {
      title: "Worldskills Singapore",
      description:
        "Silver medal in the Industrial Control category, focusing on installation and programming of automated systems.",
      platform: (
        <div>
          <div className="my-4 ]">
            <span className="bg-[#34403a] rounded-sm text-sm text-[#9ae6b4] p-1 mr-2 font-bold">
              WEBSITE
            </span>
            <span>
              <a
                href="https://www.instagram.com/p/CRVJ95TK_lG/?"
                className="text-[#d657a5] hover:underline underline-offset-2 break-words"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.instagram.com/p/CRVJ95TK_lG/?
              </a>
            </span>
          </div>
          <div className="my-4">
            <span className="bg-[#34403a] rounded-sm text-sm text-[#9ae6b4] p-1 mr-2 font-bold">
              STACK
            </span>
            <span>OMRON PLC</span>
          </div>
          <div className="my-4"></div>
        </div>
      ),
      img: (
        <div>
          <img
            className="rounded-xl"
            src="../Resources/PostImages/worldskills.jpeg"
            alt="some stuff"
          ></img>
        </div>
      ),
    },
    accenture: {
      title: "Accenture",
      description:
        "Building .NET Core applications for enterprises following an agile methodology. I develop, test and troubleshoot.",
      platform: (
        <div>
          <div className="my-4">
            <span className="bg-[#34403a] rounded-sm text-sm text-[#9ae6b4] p-1 mr-2 font-bold">
              WEBSITE
            </span>
            <span>
              <a
                href="https://www.accenture.com/sg-en"
                className="text-[#d657a5] hover:underline underline-offset-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.accenture.com/sg-en
              </a>
            </span>
          </div>
          <div className="my-4">
            <span className="bg-[#34403a] rounded-sm text-sm text-[#9ae6b4] p-1 mr-2 font-bold">
              STACK
            </span>
            <span>
              .NET Core 3.1, Entity Core, REST API, Azure DevOps, Event Hub, MS
              SQL, xUnit, Application Insights, CI/CD
            </span>
          </div>
        </div>
      ),
    },
    battery: {
      title: "Lithium Ion Battery State of Health Estimation",
      description: (
        <div className="w-full">
          Cleaned and prepared datasets from the
          <a
            className="ml-1 hover:underline underline-offset-2 text-[#d657a5] "
            href="https://web.calce.umd.edu/batteries/data.htm"
            target="_blank"
            rel="noopener noreferrer"
          >
            CALCE Battery Research Group
          </a>
          . An Extreme Learning Machine (ELM) was trained to predict a battery's
          state of health and the number of remaining cycles before its End of
          Life (EOL).
        </div>
      ),
      platform: (
        <div>
          <div className="my-4">
            <span className="bg-[#34403a] rounded-sm text-sm text-[#9ae6b4] p-1 mr-2 font-bold">
              PAPER
            </span>
            <span>
              <a
                href="https://drive.google.com/file/d/1ZzhNTy7CVxPUaOKqutFEEVvKzYNZrVwP/view?usp=sharing"
                className="text-[#d657a5] hover:underline underline-offset-2 break-words"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://drive.google.com/file/d/1ZzhNTy7CVxPUaOKqutFEEVvKzYNZrVwP/view?usp=sharing
              </a>
            </span>
          </div>
          <div className="my-4">
            <span className="bg-[#34403a] rounded-sm text-sm text-[#9ae6b4] p-1 mr-2 font-bold">
              SOURCE
            </span>
            <span>
              <a
                href="https://github.com/marvinatorrr/SOH-estimation"
                className="text-[#d657a5] hover:underline underline-offset-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/marvinatorrr/SOH-estimation
              </a>
            </span>
          </div>
          <div className="my-4">
            <span className="bg-[#34403a] rounded-sm text-sm text-[#9ae6b4] p-1 mr-2 font-bold">
              STACK
            </span>
            <span>Python, Jupyter Notebook, Pandas</span>
          </div>
        </div>
      ),
    },
    buggy: {
      title: "Autonomous Line Following Buggy",
      description: (
        <div className="w-full">
          Implemented a PID controller that steers a wire following buggy,
          modulating steering angle and speed.
        </div>
      ),
      platform: (
        <div>
          <div className="my-4 ">
            <span className="bg-[#34403a] rounded-sm text-sm text-[#9ae6b4] p-1 mr-2 font-bold">
              PAPER
            </span>
            <span>
              <a
                href="https://drive.google.com/file/d/10TAKbkR0gkmj6EWDsypBnkHBtRpShO34/view?usp=sharing"
                className="text-[#d657a5] hover:underline underline-offset-2 break-words"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://drive.google.com/file/d/10TAKbkR0gkmj6EWDsypBnkHBtRpShO34/view?usp=sharing
              </a>
            </span>
          </div>
          <div className="my-4">
            <span className="bg-[#34403a] rounded-sm text-sm text-[#9ae6b4] p-1 mr-2 font-bold">
              SOURCE
            </span>
            <span>
              <a
                href="https://github.com/marvinatorrr/Buggy"
                className="text-[#d657a5] hover:underline underline-offset-2 break-words"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/marvinatorrr/Buggy
              </a>
            </span>
          </div>
          <div className="my-4">
            <span className="bg-[#34403a] rounded-sm text-sm text-[#9ae6b4] p-1 mr-2 font-bold">
              STACK
            </span>
            <span>MPLAB X, C</span>
          </div>
        </div>
      ),
      img: (
        <div className="max-w-[375px] sm:w-[485.5px] sm:max-w-[485.5px]">
          <video
            className="rounded-xl object-cover aspect-video"
            src="../Resources/PostImages/buggy.mp4"
            muted
            autoPlay={"autoplay"}
            preLoad="auto"
            loop
          ></video>
        </div>
      ),
    },
  };

  const { id } = useParams();
  const navigate = useNavigate();
  var postinfo = dict[id];

  return (
    <AnimatedPage>
      <div className="mx-6 ">
        <div className="flex justify-center">
          <div className="mt-4 w-full max-w-[375px] sm:w-[485.5px] sm:max-w-[485.5px]">
            <div>
              <div className="flex items-center">
                {
                  <button onClick={() => navigate(-1)}>
                    <span className="text-[#d657a5] hover:underline underline-offset-2">
                      Back
                    </span>
                  </button>
                }
                {<AiOutlineRight size={12} className="mx-2" />}
                <div className="font-bold">{postinfo.title}</div>
              </div>
            </div>
            <div className="mt-2">{postinfo.description}</div>
            <div className="ml-4 ">{postinfo.platform}</div>
            <div className="">{postinfo.img}</div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}

export default Post;
