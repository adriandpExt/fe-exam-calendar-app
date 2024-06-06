import { useMutation } from "react-query";
import { login } from "../api/login";

export const useLogin = () => {
  return useMutation(login);
};
