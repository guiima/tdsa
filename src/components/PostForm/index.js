import React, { useState, useEffect } from "react";
import { Formik, useFormikContext } from "formik";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import * as Yup from "yup";
import { savePosts, editPosts } from "../../services/posts";

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

const AutoSubmit = () => {
  const { submitForm } = useFormikContext();

  React.useEffect(() => {
    submitForm();
    console.log("autosubmit");
  }, [submitForm]);
  return null;
};

const PostForm = ({ toSubmit, afterSubmit, data }) => {
  const classes = useStyles();

  const [initialValues] = useState({
    title: "",
    body: "",
  });

  useEffect(() => {
    console.log("nopSsubmitei", toSubmit);
    if (toSubmit) {
      console.log("submitei2", toSubmit);
      afterSubmit();
    }
  }, [toSubmit, afterSubmit]);

  const handleSubmit = (values) => {
    console.log("submit post form", values);
    if (data && data.id) {
      editPosts(values, data.id);
    } else {
      savePosts(values);
    }
  };

  return (
    <Container>
      <TitleForm>Post</TitleForm>
      <Formik
        initialValues={data ? data : initialValues}
        onSubmit={(values, { resetForm }) => {
          console.log("aquiii");
          handleSubmit(values);
          resetForm();
        }}
        validationSchema={FormSchema}
      >
        {({ handleChange, errors, values, touched }) => (
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
            {toSubmit && <AutoSubmit />}
          </ContentForm>
        )}
      </Formik>
    </Container>
  );
};

export default PostForm;
