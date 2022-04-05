function Thumbnail(props) {
  var dict = {
    mindset: {
      title: "Life Long Learning",
      description: "Stay Curious, Stay Hungry",
      img: "../Resources/PostImages/speech.jpg",
    },
    avensys: {
      title: "Avensys Consulting",
      description: ".NET Core",
      img: "../Resources/PostImages/avensys.jpg",
    },
    battery: {
      title: "State of Health Estimation",
      description: "Extreme Learning Machine",
      img: "../Resources/PostImages/battery.png",
    },
    buggy: {
      title: "Autonomous Buggy",
      description: "PID Controller",
      img: "../Resources/PostImages/buggy.jpg",
    },
    worldskills: {
      title: "Worldskills Singapore",
      description: "Industrial Control",
      img: "../Resources/PostImages/worldskills.jpeg",
    },
  };
  var info = dict[props.post];

  return (
    <div className="w-[230px] h-[187px] group">
      <img
        src={info.img}
        alt="post"
        className="w-[230px] h-[128px] rounded-lg my-2 group-hover:border-2 group-hover:border-solid group-hover: border-pink-500 transition-all duration-75 ease-linear object-cover"
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
