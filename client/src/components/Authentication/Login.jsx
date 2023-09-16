import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-96">
      <h1 className="text-3xl text-slate-950 py-4">Sign In to your account</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password: Yup.string()
            .required("Please enter a password")
            // check minimum characters
            .min(8, "Password must have at least 8 characters"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form className="flex flex-col justify-between ">
          <label htmlFor="email" className="py-2">
            Email Address
          </label>
          <Field
            name="email"
            type="email"
            className="px-2 py-1 text-xl outline-2 border-2 rounded-md border-slate-400 focus:border-slate-700"
          />
          <label htmlFor="password" className="py-2">
            Password
          </label>
          <Field
            name="password"
            type="password"
            className="px-2 py-1 text-xl outline-2 rounded-md border-2 border-slate-400 focus:border-slate-700"
          />
          <ErrorMessage name="email" />
          <ErrorMessage name="password" />

          <button
            type="submit"
            className="rounded-md bg-red-700 py-2 px-2 my-4  text-slate-100 active:scale-95"
          >
            Submit
          </button>
        </Form>
      </Formik>
      <p className="flex gap-8">
        Don't you have an account?{" "}
        <Link to="/register" className="text-red-500 hover:underline">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default Login;
