import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const NewsletterForm = () => {
  return (
    <div className="form-container">
      <Formik
        initialValues={{
          firstName: "",
          email: "",
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
        })}
        onSubmit={(values) => console.log(values)}
      >
        <Form className="form-components">
          <label htmlFor="firstName">First Name</label>
          <Field name="firstName" type="text" />
          <ErrorMessage
            className="error-message"
            component="p"
            name="firstName"
          />

          <label htmlFor="email">Email Address</label>
          <Field name="email" type="email" />
          <ErrorMessage component="p" className="error-message" name="email" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default NewsletterForm;
