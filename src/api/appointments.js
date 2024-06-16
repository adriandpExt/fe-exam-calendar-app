import axios from "axios";

const baseurl = "http://localhost:3000";
export const getAllAppointment = async () => {
  const response = await axios.get(`${baseurl}/appointment`);

  return response.data;
};

export const postAppointment = async (params) => {
  const response = await axios.post(`${baseurl}/appointment`, params);

  return response.data;
};

export const putAppointment = async (params) => {
  const response = await axios.put(
    `${baseurl}/appointment/${params.id}`,
    params
  );

  return response.data;
};

export const deleteAppointment = async (params) => {
  const response = await axios.delete(`${baseurl}/appointment/${params.id}`);

  return response.data;
};
