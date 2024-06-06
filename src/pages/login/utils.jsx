import * as yup from "yup";

export const validationSchema = yup.object({
  email: yup.string().required("Email is required"),
  password: yup.string().required("Password type is required"),
});

export const generateToken = (length) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let token = "";
  for (let i = 0; i < length; i++) {
    token += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return token;
};
