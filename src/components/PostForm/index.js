import React, { useState, useEffect } from "react";
import { Formik, useFormikContext } from "formik";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import * as Yup from "yup";

import { Container, ContentForm, TitleForm } from "./styles";

const FormSchema = Yup.object().shape({
  title: Yup.string().required(),
  body: Yup.string().required(),
});

const useStyles = makeStyles(() => ({
  input: {
    marginTop: 10,
  },
}));

const AutoSubmitToken = () => {
  const { submitForm } = useFormikContext();

  React.useEffect(() => {
    submitForm();
  }, [submitForm]);
  return null;
};

const PostForm = ({ toSubmit, afterSubmit }) => {
  const classes = useStyles();
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
      <TitleForm>Post</TitleForm>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { resetForm }) => {
          console.log("valuesss", values);
          resetForm();
        }}
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
              className={classes.input}
            />
            {errors.title && touched.title && <h3>{errors.title}</h3>}

            <TextField
              label="body"
              type="text"
              value={values.body}
              onChange={handleChange("body")}
              multiline
              rows={4}
              variant="outlined"
              className={classes.input}
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
