/* eslint-disable react/prop-types */
import { useFormik } from "formik";
import moment from "moment";

import { Textfield, Selectfield, Textarea } from "../form";
import { SvgIcons } from "../svg-icons";

import { usePostAppointment } from "~/queries/appointment";

import { validationSchema, initialState } from "./utils";

export const FormModal = ({ onCreate, open, title, onClose }) => {
  const postMeeting = usePostAppointment();

  const dateToday = moment().format("yyyy-MM-DD");

  const formSubmit = useFormik({
    initialValues: {
      ...initialState,
      calendarDate: dateToday,
      status: "Pending",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const createForm = {
        description: values.description,
        calendarDate: values.calendarDate,
        status: "Pending",
      };
      try {
        await postMeeting.mutateAsync(createForm);

        onCreate();
        formSubmit.resetForm();
      } catch (error) {
        console.error("Error:", error);
      }
    },
  });

  const renderActionButton = () => {
    return (
      <div className="modal-action flex justify-between">
        <button className="btn btn-error" type="button" onClick={onClose}>
          Close
        </button>
        <button type="submit" className="btn btn-success">
          Create
          <SvgIcons name={"ic_create"} style={{ height: 20, width: 20 }} />
        </button>
      </div>
    );
  };

  return (
    <dialog className="modal" open={open}>
      <div className="modal-box">
        <h3 className="font-bold text-lg pb-5">{title}</h3>

        <form className="space-y-5" onSubmit={formSubmit.handleSubmit}>
          <Textarea
            label={"Description"}
            name={"description"}
            placeholder="Description"
            value={formSubmit.values.description}
            onChange={formSubmit.handleChange}
            error={
              formSubmit.touched.description &&
              Boolean(formSubmit.errors.description)
            }
            helperText={
              formSubmit.touched.description && formSubmit.errors.description
            }
          />

          <Textfield
            label="Date"
            name={"calendarDate"}
            type="date"
            value={formSubmit.values.calendarDate}
            onChange={formSubmit.handleChange}
            error={
              formSubmit.touched.calendarDate &&
              Boolean(formSubmit.errors.calendarDate)
            }
            helperText={
              formSubmit.touched.calendarDate && formSubmit.errors.calendarDate
            }
            iconName={"ic_calendar"}
            isSvg
          />

          <Selectfield
            disabled
            label="Status"
            name={"status"}
            value={formSubmit.values.status}
            onChange={formSubmit.handleChange}
            error={
              formSubmit.touched.status && Boolean(formSubmit.errors.status)
            }
            helperText={formSubmit.touched.status && formSubmit.errors.status}
            options={[
              { label: "Pending", value: "Pending" },
              { label: "Done", value: "Done" },
            ]}
          />

          {renderActionButton()}
        </form>
      </div>
    </dialog>
  );
};

export default FormModal;
