import React, { useEffect, useRef, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { registerUserAsync } from "../../features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const Register = () => {
  const dispatch = useDispatch();
  const [image, setImage] = useState([]);
  // const [ImagePreview, setImagePreview] = useState("");

  const aRef = useRef(null);

  const { error } = useSelector((state) => state.auth);

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

  const Navigate = useNavigate();

  useEffect(() => {
    toast.error(error);
  }, [error, toast]);

  return (
    <div className="w-96">
      <h1 className="text-3xl text-slate-950 py-4">Register</h1>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Name is Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Email Address is Required"),
          password: Yup.string()
            .required("Password is requied")
            // check minimum characters
            .min(8, "Password must have at least 8 characters"),
        })}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={(values, { resetForm }) => {
          dispatch(
            registerUserAsync({
              name: values.name,
              email: values.email,
              password: values.password,
              avatar: image,
            })
          )
            .unwrap()
            .then((res) => {
              aRef.current.value = null;
              resetForm();
            })
            .catch((error) => {
              console.log(error);
            });
        }}
      >
        <Form className="flex flex-col justify-between ">
          <label htmlFor="name" className="py-2">
            Name
          </label>
          <Field
            name="name"
            type="text"
            id="name"
            className="px-2 py-1 text-xl outline-2 border-2 border-slate-400 rounded-md focus:border-slate-700"
          />

          <label htmlFor="email" className="py-2">
            Email Address
          </label>
          <Field
            name="email"
            type="email"
            id="email"
            className="px-2 py-1 text-xl outline-2 border-2 border-slate-400 rounded-md focus:border-slate-700"
          />
          <label htmlFor="password" className="py-2">
            Password
          </label>
          <Field
            name="password"
            type="password"
            id="password"
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
          <ErrorMessage name="email">
            {(msg) => {
              toast.error(msg);
            }}
          </ErrorMessage>
          <ErrorMessage name="name">
            {(msg) => {
              toast.error(msg);
            }}
          </ErrorMessage>
          <ErrorMessage name="password">
            {(msg) => {
              toast.error(msg);
            }}
          </ErrorMessage>

          <button
            type="submit"
            className="rounded-md bg-red-700 py-2 px-2 my-4 text-slate-100 active:scale-95"
          >
            Submit
          </button>
        </Form>
      </Formik>
      <p className="flex justify-between">
        Already have an account?
        <Link to="/login" className="text-red-500 hover:underline">
          Log In
        </Link>
      </p>
    </div>
  );
};

export default Register;
