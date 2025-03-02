import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import styles from "./ContactForm.module.css";

const validationSchema = Yup.object({
  name: Yup.string().min(3).max(50).required("Required"),
  number: Yup.string().min(3).max(50).required("Required"),
});

const ContactForm = ({ addContact }) => {
  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        addContact({ id: nanoid(), ...values });
        resetForm();
      }}
    >
      <Form className={styles.form}>
        <Field name="name" placeholder="Name" />
        <ErrorMessage name="name" component="div" className={styles.error} />
        <Field name="number" placeholder="Phone Number" />
        <ErrorMessage name="number" component="div" className={styles.error} />
        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;