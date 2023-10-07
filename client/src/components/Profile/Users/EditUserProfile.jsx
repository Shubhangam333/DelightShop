import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { clearErrors, updateUserAsync } from "../../../features/authSlice";
import { useNavigate } from "react-router-dom";

const EditUserProfile = () => {
  const dispatch = useDispatch();
  const [image, setImage] = useState("");
  // const [ImagePreview, setImagePreview] = useState("");

  const { error, userInfo } = useSelector((state) => state.auth);

  const [name, setName] = useState(userInfo.name);
  const [email, setEmail] = useState(userInfo.email);

  const Navigate = useNavigate();

  const aRef = useRef(null);

  //handle and convert it in base 64
  const handleImage = (e) => {
    const file = e.target.files[0];
    setFileToBase(file);
  };

  const setFileToBase = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateUserAsync({
        name: name,
        email: email,
        avatar: image,
      })
    )
      .unwrap()
      .then(() => {
        aRef.current.value = null;
        toast.success("Profile Updated Successfully");
        Navigate("/profile");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    toast.error(error);
    dispatch(clearErrors());
  }, [error, dispatch]);
  return (
    <div className="py-12 px-18 grid items-center justify-center border-red-500 border-2 ">
      <h1 className="text-3xl text-slate-950 py-4">Edit Profile</h1>

      <form className="flex flex-col justify-between " onSubmit={handleSubmit}>
        <label htmlFor="name" className="py-2">
          Name
        </label>
        <input
          name="name"
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="px-2 py-1 text-xl outline-2 border-2 border-slate-400 rounded-md focus:border-slate-700"
        />

        <label htmlFor="email" className="py-2">
          Email Address
        </label>
        <input
          name="email"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-2 py-1 text-xl outline-2 border-2 border-slate-400 rounded-md focus:border-slate-700"
        />
        <label htmlFor="avatar" className="py-2">
          Profile Picture
        </label>
        {/* <img src={ImagePreview} alt="" /> */}
        <input
          ref={aRef}
          name="avatar"
          type="file"
          id="avatar"
          onChange={handleImage}
          className="px-2 py-1 text-xl outline-2 border-2 border-slate-400 rounded-md focus:border-slate-700"
        />

        <button
          type="submit"
          className="rounded-md bg-red-700 py-2 px-2 my-4 text-slate-100 active:scale-95"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditUserProfile;
