function Thumbnail(props) {
  var dict = {
    post1: {
      title: "title of post 1",
      description: "some description",
      img: "../Resources/PostImages/Post1.png",
    },
    post2: {
      title: "title of post 2",
      description: "some description",
      img: "../Resources/PostImages/Post1.png",
    },
    post3: {
      title: "title of post 3",
      description: "some description",
      img: "../Resources/PostImages/Post1.png",
    },
    post4: {
      title: "title of post 4",
      description: "some description",
      img: "../Resources/PostImages/Post1.png",
    },
  };
  var info = dict[props.post];

  return (
    <div className="w-[230px] h-[187px] group">
      <img
        src={info.img}
        className="w-[230px] h-[128px] rounded-lg my-2 group-hover:border-2 group-hover:border-solid group-hover: border-pink-500 transition-all duration-75 ease-linear"
      ></img>
      <div className="grid grid-rows-2 justify-center ">
        <h3 className=" text-center font-bold">{info.title}</h3>
        <p className=" text-center text-base group-hover:underline group-hover:underline-offset-2 decoration-pink-500">
          {info.description}
        </p>
      </div>
    </div>
  );
}

export default Thumbnail;
