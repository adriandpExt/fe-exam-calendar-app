import * as yup from "yup";

export const validationSchema = yup.object({
  description: yup.string().required("Description is required"),
  calendarDate: yup.string().required("Date type is required"),
  status: yup.string().required("Status type is required"),
});

export const initialState = {
  description: "",
  calendarDate: "",
  status: "",
};

export const emoji = [
  "emojione:red-circle",
  "twemoji:yellow-circle",
  "twemoji:green-circle",
];
