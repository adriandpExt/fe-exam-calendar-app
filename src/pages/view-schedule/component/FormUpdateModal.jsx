/* eslint-disable react/prop-types */

import { useFormik } from "formik";

import { Textfield, Selectfield } from "../../../components";

import { usePutAppointment } from "../../../queries/appointment";

import { validationSchema } from "./utils";

const FormUpdateModal = ({ open, title, data, onClose, onDelete }) => {
  const updateMeeting = usePutAppointment();

  const formSubmit = useFormik({
    initialValues: {
      description: data?.description || "",
      calendarDate: data?.calendarDate || "",
      status: data?.status || "",
      id: data?.id,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        updateMeeting.mutate(values);
        onClose();
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
        <div>
          <button
            type="button"
            className="btn btn-warning mr-2"
            onClick={() => onDelete(data?.id)}
          >
            Delete
          </button>
          <button type="submit" className="btn btn-success">
            Update
          </button>
        </div>
      </div>
    );
  };

  return (
    <dialog className="modal" open={open}>
      <div className="modal-box">
        <h3 className="font-bold text-lg pb-5">{title}</h3>

        <form className="space-y-5" onSubmit={formSubmit.handleSubmit}>
          <Textfield
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
          />
          <Selectfield
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

export default FormUpdateModal;
