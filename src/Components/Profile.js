import ProfilePicture from "./ProfilePicture";

function Profile() {
  return (
    <div className="flex justify-center my-3">
      <div className="flex justify-between items-center  w-[485.5px] h-[106px]">
        <div>
          <h1 className="text-6xl font-bold">Marvin Ho</h1>
          <p className="text-2xl">.Net Software Engineer</p>
        </div>
        <div className="">
          <ProfilePicture />
        </div>
      </div>
    </div>
  );
}

export default Profile;
