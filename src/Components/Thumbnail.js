function Thumbnail(props) {
  var dict = {
    mindset: {
      title: "Life Long Learning",
      description: "Stay Curious, Stay Hungry",
      img: "../Resources/PostImages/speech.jpg",
    },
    accenture: {
      title: "Accenture",
      description: ".NET Core",
      img: "../Resources/PostImages/accenture.png",
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
    <div className="group">
      <div className="max-w-[375px] mt-4 sm:w-[230.75px]">
        <img
          src={info.img}
          alt="post"
          className="rounded-lg  group-hover:border-2 group-hover:border-solid group-hover: border-pink-500 transition-all duration-75 ease-linear object-cover aspect-video"
        ></img>
      </div>

      <div className="grid grid-rows-2 justify-center mt-2">
        <h3 className=" text-center font-bold">{info.title}</h3>
        <p className=" text-center text-base group-hover:underline group-hover:underline-offset-2 decoration-pink-500">
          {info.description}
        </p>
      </div>
    </div>
  );
}

export default Thumbnail;
