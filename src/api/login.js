import axios from "axios";

export const login = async ({ email, password }) => {
  const response = await axios.get(
    `http://localhost:3000/login?email=${email}&password=${password}`
  );
  const user = response.data[0];
  return user;
};
