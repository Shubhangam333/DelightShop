import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return (
    <div className="py-12 px-18 grid grid-cols-2 border-red-500 border-2">
      <div className="flex flex-col gap-8 items-center">
        <img src={userInfo.avatar.url} alt="avatar" className="w-56" />
        <Link to="/profile/editProfile">
          <button className="p-2 bg-red-700 opacity-90 text-slate-200 rounded-md w-52 flex justify-center active:scale-95 hover:opacity-100">
            Edit Profile
          </button>
        </Link>
      </div>
      <div className="flex flex-col justify-between ">
        <div>
          <p className="text-slate-950 font-medium text-2xl ">Full Name</p>
          <p className="text-slate-600 font-medium ">{userInfo.name}</p>
        </div>
        <div>
          <p className="text-slate-950 font-medium text-2xl">Email</p>
          <p className="text-slate-600 font-medium">{userInfo.email}</p>
        </div>
        <div>
          <p className="text-slate-950 font-medium text-2xl">Joined On</p>
          <p className="text-slate-600 font-medium">
            {userInfo.createdAt.slice(0, 10)}
          </p>
        </div>
        <div className="flex flex-col gap-4 items-start">
          <Link to="/profile/orders">
            <button className="bg-slate-950 text-white w-56">My Orders</button>
          </Link>
          <Link to="/profile/editpassword">
            <button className="bg-slate-950 text-white w-56">
              Edit Password
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
