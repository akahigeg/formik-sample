import * as React from "react";
// import * as Yup from 'yup';
import {
  withFormik,
  FormikActions,
  FormikProps,
  FormikErrors,
  Form,
  Field
} from "formik";

interface BasicFormValues {
  firstName: string;
}

interface OtherProps {
  message: string;
}

const initialValues = { firstName: "hoge" };

const onSubmit = (
  values: BasicFormValues,
  actions: FormikActions<BasicFormValues>
) => {
  console.log({ values, actions });
  alert(JSON.stringify(values, null, 2));
  actions.setSubmitting(false);
};

const InnerForm = (props: OtherProps & FormikProps<BasicFormValues>) => {
  const { touched, errors, isSubmitting, message } = props;
  return (
    <Form>
      <h1>{message}</h1>
      <Field type="text" name="firstName" />
      {touched.firstName && errors.firstName && <div>{errors.firstName}</div>}

      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </Form>
  );
};

interface BasicFormProps {
  message: string;
}

const BasicForm = withFormik<BasicFormProps, BasicFormValues>({
  // Transform outer props into form values
  mapPropsToValues: props => {
    return initialValues;
  },

  // Add a custom validation function (this can be async too!)
  validate: (values: BasicFormValues) => {
    const errors: FormikErrors<BasicFormValues> = {};
    if (!values.firstName) {
      errors.firstName = "Required";
    }
    return errors;
  },

  handleSubmit: onSubmit
})(InnerForm);

export default BasicForm;
