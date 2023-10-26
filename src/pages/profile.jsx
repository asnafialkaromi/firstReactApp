import { useLogin } from "../hooks/useLogin";

const ProfilePage = () => {
  const usernamae = useLogin();

  return (
    <div>
      <h1>Profile</h1>
      Username : {usernamae}
    </div>
  );
};

export default ProfilePage;
