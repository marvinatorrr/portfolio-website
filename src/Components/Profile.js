import ProfilePicture from "./ProfilePicture";

function Profile() {
  return (
    <div className="flex justify-center">
      <div className="w-[375px] sm:w-[485.5px]">
        <h1 className="text-5xl font-bold">Marvin Ho</h1>
        <p className="text-xl">Software Engineer</p>
        <div className="flex justify-center my-2">
          <ProfilePicture />
        </div>
      </div>
    </div>
  );
}

export default Profile;
