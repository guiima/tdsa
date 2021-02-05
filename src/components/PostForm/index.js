import React, { useState, useEffect } from "react";
import { Formik, useFormikContext } from "formik";
import TextField from "@material-ui/core/TextField";
import { Container, ContentForm } from "./styles";
import * as Yup from "yup";

const FormSchema = Yup.object().shape({
  title: Yup.string().required(),
  body: Yup.string().required(),
});

const AutoSubmitToken = () => {
  const { submitForm } = useFormikContext();

  React.useEffect(() => {
    submitForm();
  }, [submitForm]);
  return null;
};

const PostForm = ({ toSubmit, toResetForm, afterSubmit }) => {
  const [initialValues] = useState({
    title: "",
    body: "",
  });

  useEffect(() => {
    console.log("nopSsubmitei", toSubmit);
    if (toSubmit) {
      console.log("submitei", toSubmit);
      afterSubmit();
    }
  }, [toSubmit, afterSubmit]);

  return (
    <Container>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log("valuesss", values)}
        validationSchema={FormSchema}
      >
        {({ handleChange, errors, handleSubmit, values, touched }) => (
          <ContentForm>
            <TextField
              label="title"
              type="text"
              value={values.title}
              onChange={handleChange("title")}
              variant="outlined"
            />
            {errors.title && touched.title && <h3>{errors.title}</h3>}

            <TextField
              label="Body"
              type="text"
              value={values.body}
              onChange={handleChange("body")}
              multiline
              rows={4}
              variant="outlined"
            />
            {errors.body && touched.body && <h3>{errors.body}</h3>}
            {toSubmit && <AutoSubmitToken />}
          </ContentForm>
        )}
      </Formik>
    </Container>
  );
};

export default PostForm;
