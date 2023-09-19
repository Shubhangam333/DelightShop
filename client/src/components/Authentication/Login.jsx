import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUserAsync } from "../../features/authSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  return (
    <div className="w-96">
      <h1 className="text-3xl text-slate-950 py-4">Sign In to your account</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("Email Address Required"),
          password: Yup.string()
            .required("Please enter a password")
            // check minimum characters
            .min(8, "Password must have at least 8 characters"),
        })}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={(values, { resetForm }) => {
          dispatch(
            loginUserAsync({
              email: values.email,
              password: values.password,
            })
          )
            .unwrap()
            .then((res) => {
              toast.success("Login Successful");
              resetForm();
            })
            .catch((error) => {
              console.log(error);
            });
        }}
      >
        <Form className="flex flex-col justify-between ">
          <label htmlFor="email" className="py-2">
            Email Address
          </label>
          <Field
            name="email"
            type="email"
            className="px-2 py-1 text-lg outline-2 border-2 rounded-md border-slate-400 focus:border-slate-700"
          />
          <label htmlFor="password" className="py-2">
            Password
          </label>
          <Field
            name="password"
            type="password"
            className="px-2 py-1 text-lg outline-2 rounded-md border-2 border-slate-400 focus:border-slate-700"
          />
          <ErrorMessage name="email">
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
            className="rounded-md bg-red-700 py-2 px-2 my-4  text-slate-100 active:scale-95"
          >
            Submit
          </button>
        </Form>
      </Formik>
      <p className="flex justify-between">
        Don't you have an account?{" "}
        <Link to="/register" className="text-red-500 hover:underline">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default Login;
