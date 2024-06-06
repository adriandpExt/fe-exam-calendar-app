import { useMutation, useQuery } from "react-query";
import {
  getAllAppointment,
  postAppointment,
  putAppointment,
  deleteAppointment,
} from "../api/appointments";

export const useGetAllAppointment = () => {
  return useQuery({
    queryKey: ["getAppointment"],
    queryFn: getAllAppointment,
  });
};

export const usePostAppointment = () => {
  return useMutation(postAppointment);
};

export const usePutAppointment = () => {
  return useMutation(putAppointment);
};

export const useDeleteAppointment = () => {
  return useMutation(deleteAppointment);
};
