import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

import { Textfield } from "../../components";

import { useLogin } from "../../queries/login";

import { validationSchema, generateToken } from "./utils";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();
  const loginMutation = useLogin();

  useEffect(() => {
    setInterval(() => {
      const token = localStorage.getItem("token");
      if (token) {
        setIsLoggedIn(true);
      }
    }, 2000);
  }, []);

  const handleSubmitLogin = async (values, { setSubmitting }) => {
    try {
      await loginMutation.mutateAsync(values);
      const token = generateToken(20);

      localStorage.setItem("token", token);
      localStorage.setItem("email", values.email);
    } catch (error) {
      console.error("Login error:", error.message);
    } finally {
      setSubmitting(false);
    }
  };

  const loginForm = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: validationSchema,
    onSubmit: handleSubmitLogin,
  });

  if (isLoggedIn) {
    return navigate("/dashboard");
  }

  return (
    <div
      className="text-center h-screen p-10"
      style={{
        backgroundImage: `url(https://img.freepik.com/premium-photo/calendar-page-close-up-blue-background-business-planning-appointment-meeting-concept_293060-976.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <form
        className="space-y-5 pt-40 px-10 pb-10 border-4 w-full lg:w-1/2 backdrop-filter backdrop-blur-lg bg-white bg-opacity-30 shadow-md"
        onSubmit={loginForm.handleSubmit}
      >
        <Textfield
          name="email"
          type={"email"}
          iconName={"ic_email"}
          value={loginForm.values.email}
          onChange={loginForm.handleChange}
          error={loginForm.touched.email && Boolean(loginForm.errors.email)}
          helperText={loginForm.touched.email && loginForm.errors.email}
          isSvg
        />
        <Textfield
          name="password"
          type={"password"}
          iconName={"ic_password"}
          value={loginForm.values.password}
          onChange={loginForm.handleChange}
          error={
            loginForm.touched.password && Boolean(loginForm.errors.password)
          }
          helperText={loginForm.touched.password && loginForm.errors.password}
          isSvg
        />

        <button className="btn w-full" type="submit">
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default Login;
