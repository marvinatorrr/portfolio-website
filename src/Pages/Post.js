import AnimatedPage from "./AnimatePage";

function Post(props) {
  var dict = {
    post1: {
      title: "title of post 1",
      description: "some description",
      platform: "some platform",
      blogpost: "some blogpost",
      stack: "some stack",
      img: "../Resources/PostImages/Post1.png",
    },
  };

  var postinfo = dict[props.post];

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
