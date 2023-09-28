import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useParams } from "react-router-dom";
import { getAdminUserByIdAsync } from "../../../features/adminSlice";

const EditUser = () => {
  const dispatch = useDispatch();
  const [image, setImage] = useState([]);

  const aRef = useRef(null);

  const { error } = useSelector((state) => state.auth);
  const { AdminUser } = useSelector((state) => state.admin);

  const params = useParams();

  const { userId } = params;

  const setFileToBase = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
    };
  };

  useEffect(() => {
    dispatch(getAdminUserByIdAsync(userId));
  }, [dispatch]);
  return (
    <>
      {AdminUser && (
        <div className="w-96 m-auto">
          <h1 className="text-3xl text-slate-950 py-4">Edit User</h1>
          <Formik
            initialValues={{ name: "", email: "" }}
            validationSchema={Yup.object({
              name: Yup.string()
                .max(15, "Must be 15 characters or less")
                .required("Name is Required"),
              email: Yup.string()
                .email("Invalid email address")
                .required("Email Address is Required"),
            })}
            validateOnChange={false}
            validateOnBlur={false}
            onSubmit={(values, { resetForm }) => {
              dispatch(
                registerUserAsync({
                  name: values.name,
                  email: values.email,
                  password: values.password,
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
                value={AdminUser.name}
                className="px-2 py-1 text-xl outline-2 border-2 border-slate-400 rounded-md focus:border-slate-700"
              />

              <label htmlFor="email" className="py-2">
                Email Address
              </label>
              <Field
                name="email"
                type="email"
                id="email"
                value={AdminUser.email}
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
      )}
    </>
  );
};

export default EditUser;
