import { Link } from "react-router-dom";

function Post(props) {
  return (
    <Link to="post" className="w-[230px] h-[187px] group">
      <img
        src={props.imagesrc}
        alt={props.imagealt}
        className="w-[230px] h-[128px] rounded-lg my-2 group-hover:border-2 group-hover:border-solid group-hover: border-pink-500 transition-all duration-75 ease-linear"
      ></img>
      <div className="grid grid-rows-2 justify-center ">
        <h3 className=" text-center font-bold">{props.title}</h3>
        <p className=" text-center text-base group-hover:underline group-hover:underline-offset-2 decoration-pink-500">
          {props.description}
        </p>
      </div>
    </Link>
  );
}

export default Post;
