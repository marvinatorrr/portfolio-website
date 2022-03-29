import { useParams } from "react-router-dom";
import AnimatedPage from "./AnimatePage";

function Post() {
  var dict = {
    post1: {
      title: "title of post 1",
      description: "some description",
      platform: "some platform",
      blogpost: "some blogpost",
      stack: "some stack",
      img: "../Resources/PostImages/Post1.png",
    },
    post2: {
      title: "title of post 2",
      description: "some description",
      platform: "some platform",
      blogpost: "some blogpost",
      stack: "some stack",
      img: "../Resources/PostImages/Post1.png",
    },
    post3: {
      title: "title of post 3",
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
  var postinfo = dict[id];

  return (
    <AnimatedPage>
      <div className="flex w-full justify-center">
        <div className="w-[485.5px]">
          <p>{postinfo.title}</p>
          <p>{postinfo.description}</p>
          <p>{postinfo.platform}</p>
          <p>{postinfo.blogpost}</p>
          <p>{postinfo.stack}</p>
          <img src={postinfo.img} className="rounded-md my-2"></img>
        </div>
      </div>
    </AnimatedPage>
  );
}

export default Post;
