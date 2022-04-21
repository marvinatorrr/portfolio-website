import ProfilePicture from "./ProfilePicture";

function Profile() {
  return (
    <div className="flex justify-center">
      <div className="w-[375px] sm:w-[485.5px] sm:flex sm:justify-between sm:items-center">
        <div>
          <h1 className="text-5xl sm:text-6xl font-bold">Marvin Ho</h1>
          <p className="text-xl">Software Engineer</p>
        </div>

        <div className="flex justify-center my-2">
          <ProfilePicture />
        </div>
      </div>
    </div>
  );
}

export default Profile;
