function Post(props) {
  return (
    <div className="w-[230px] h-[187px]">
      <img
        src={props.imagesrc}
        alt={props.imagealt}
        className="w-[230px] h-[128px] rounded-lg my-2"
      ></img>
      <div className="grid grid-rows-2 justify-center ">
        <h3 className=" text-center">{props.title}</h3>
        <p className=" text-center">{props.description}</p>
      </div>
    </div>
  );
}

export default Post;
