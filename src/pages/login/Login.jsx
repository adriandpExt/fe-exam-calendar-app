import "react-toastify/dist/ReactToastify.css";

import { Bounce, ToastContainer, toast } from "react-toastify";
import { useFormik } from "formik";

import { SvgIcons, Textfield } from "~/components";
import { useLogin } from "~/queries/login";
import { useAuth } from "~/hooks/useAuth";

import { validationSchema, generateToken } from "./utils";

const Login = () => {
  const { loginAuth } = useAuth();

  const loginMutation = useLogin();

  const handleSubmitLogin = async (values, { setSubmitting }) => {
    try {
      const response = await loginMutation.mutateAsync(values);

      if (
        response &&
        response.email === values.email &&
        response.password === values.password
      ) {
        const token = generateToken(36);

        loginAuth(token, values.email);
      } else {
        toast.error("Incorrect email or password");
      }
    } catch (error) {
      toast.error(`${error}`);
    } finally {
      setSubmitting(false);
    }
  };

  const loginForm = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: validationSchema,
    onSubmit: handleSubmitLogin,
  });

  return (
    <main
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
          <SvgIcons name={"ic_calendar"} className="drop-shadow-2xl" />

          <p className="font-extrabold text-xl from-stone-600 text-red-950">
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
          className="btn btn-outline hover:btn-primary w-full text-lg border-red-950 border-2"
          type="submit"
        >
          LOGIN
        </button>
      </form>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </main>
  );
};

export default Login;
