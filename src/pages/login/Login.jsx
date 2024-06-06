import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

import { SvgIcons, Textfield } from "../../components";

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
        backgroundImage: `url(https://echo360.com/wp-content/uploads/2018/08/iStock-916563360.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <form
        className="space-y-5 pt-28 px-10 pb-10 border-4 w-full lg:w-1/2 backdrop-filter backdrop-blur-lg bg-white bg-opacity-30 shadow-md rounded-xl text-center"
        onSubmit={loginForm.handleSubmit}
      >
        <div className="flex items-center">
          <SvgIcons name={"ic_calendar"} />
          <p className="font-semibold text-xl from-stone-600">
            LOGIN TO SETUP APPOINTMENT
          </p>
        </div>

        <Textfield
          name="email"
          type={"email"}
          placeholder="Email"
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
          placeholder="Password"
          iconName={"ic_password"}
          value={loginForm.values.password}
          onChange={loginForm.handleChange}
          error={
            loginForm.touched.password && Boolean(loginForm.errors.password)
          }
          helperText={loginForm.touched.password && loginForm.errors.password}
          isSvg
        />

        <button
          className="btn btn-outline hover:btn-primary w-full text-lg"
          type="submit"
        >
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default Login;
