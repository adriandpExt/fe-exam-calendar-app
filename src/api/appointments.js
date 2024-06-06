// api/login.js
import axios from "axios";

export const getAllAppointment = async () => {
  const baseurl = "http://localhost:8080/appointment";
  const response = await axios.get(baseurl);

  return response.data;
};

export const postAppointment = async (params) => {
  const baseurl = "http://localhost:8080/appointment";
  const response = await axios.post(baseurl, params);

  return response.data;
};

export const putAppointment = async (params) => {
  const baseurl = `http://localhost:8080/appointment/${params.id}`;
  const response = await axios.put(baseurl, params);

  return response.data;
};

export const deleteAppointment = async (params) => {
  const baseurl = `http://localhost:8080/appointment/${params.id}`;
  const response = await axios.delete(baseurl);

  return response.data;
};
