import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="w-96">
      <h1 className="text-3xl text-slate-950 py-4">Register</h1>
      <Formik
        initialValues={{ userName: "", email: "", password: "", avatar: "" }}
        validationSchema={Yup.object({
          userName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password: Yup.string()
            .required("Please enter a password")
            // check minimum characters
            .min(8, "Password must have at least 8 characters"),
          avatar: Yup.string().required("Please upload profile picture"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form className="flex flex-col justify-between ">
          <label htmlFor="userName" className="py-2">
            User Name
          </label>
          <Field
            name="userName"
            type="text"
            id="userName"
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
          <Field
            name="avatar"
            type="file"
            id="avatar"
            className="px-2 py-1 text-xl outline-2 border-2 border-slate-400 rounded-md focus:border-slate-700"
          />
          <ErrorMessage name="email" />
          <ErrorMessage name="userName" />
          <ErrorMessage name="password" />
          <ErrorMessage name="avatar" />

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
