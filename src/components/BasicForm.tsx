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

const initialValues = { firstName: "hoge" };

const onSubmit = (
  values: BasicFormValues,
  actions: FormikActions<BasicFormValues>
) => {
  console.log({ values, actions });
  alert(JSON.stringify(values, null, 2));
  actions.setSubmitting(false);
};

const NameInput: React.SFC<{}> = () => {
  return (
    <Field
      name="firstName"
      render={({ field, form }: FieldProps<BasicFormValues>) => (
        <div>
          <input type="text" {...field} placeholder="First Name" />
          {form.touched.firstName &&
            form.errors.firstName &&
            form.errors.firstName}
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
            <NameInput />
          </Form>
        )}
      />
    </div>
  );
};

export default BasicForm;
