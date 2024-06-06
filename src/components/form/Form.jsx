/* eslint-disable react/prop-types */
import { FormikProvider } from "formik";

export const Form = ({ children, instance, ...rest }) => {
  return (
    <FormikProvider value={instance}>
      <form
        className="space-y-5 p-5"
        {...rest}
        onSubmit={instance?.handleSubmit}
      >
        {children}
      </form>
    </FormikProvider>
  );
};

export default Form;
