import axios from "axios";

export const login = async ({ email, password }) => {
  const baseurl = "http://localhost:8080/login";
  const response = await axios.post(baseurl, { email, password });

  return response.data;
};
