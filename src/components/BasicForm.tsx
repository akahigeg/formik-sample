import * as React from "react";
import {
  Formik,
  FormikActions,
  FormikProps,
  Form,
  Field,
  FieldProps
} from "formik";

interface BasicFormValues {
  firstName: string;
}

const initialValues = { firstName: "" };

const onSubmit = (
  values: BasicFormValues,
  actions: FormikActions<BasicFormValues>
) => {
  console.log({ values, actions });
  alert(JSON.stringify(values, null, 2));
  actions.setSubmitting(false);
};

interface InputProps {
  name: string;
  label: string;
}

const Input: React.SFC<InputProps> = props => {
  return (
    <Field
      name={props.name}
      render={({ field, form }: FieldProps<BasicFormValues>) => (
        <div>
          <input type="text" {...field} placeholder={props.label} />
          {form.touched[props.name] &&
            form.errors[props.name] &&
            form.errors[props.name]}
        </div>
      )}
    />
  );
};

const BasicForm: React.SFC<{}> = () => {
  console.log("b");
  return (
    <div>
      <h1>BasicForm</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        render={(formikBag: FormikProps<BasicFormValues>) => (
          <Form>
            <Input name="firstName" label="First Name" />
          </Form>
        )}
      />
    </div>
  );
};

export default BasicForm;
