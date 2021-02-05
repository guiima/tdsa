import React, { useState, useEffect } from "react";
import { Formik, useFormikContext } from "formik";
import TextField from "@material-ui/core/TextField";
import * as Yup from "yup";
import { savePosts, editPosts } from "../../services/posts";
import { useSelector } from "react-redux";

import { Container, ContentForm, TitleForm, useStyles } from "./styles";

const FormSchema = Yup.object().shape({
  title: Yup.string().required(),
  body: Yup.string().required(),
});

const AutoSubmit = () => {
  const { submitForm } = useFormikContext();

  React.useEffect(() => {
    submitForm();
  }, [submitForm]);
  return null;
};

const PostForm = ({ toSubmit, afterSubmit, data, saveAndContinue }) => {
  const classes = useStyles();
  const saveComments = useSelector((state) => state.comments.saveCommentAction);
  const comment = useSelector((state) => state.comments.comment);

  const [initialValues] = useState({
    title: "",
    body: "",
  });

  useEffect(() => {}, [saveAndContinue]);

  useEffect(() => {
    if (toSubmit) {
      afterSubmit();
    }
  }, [toSubmit, afterSubmit]);

  const handleSubmit = (values) => {
    if (data && data.id) {
      editPosts(values, data.id);
    } else {
      savePosts(values, comment);
    }
  };

  return (
    <Container>
      <TitleForm>Post</TitleForm>
      <Formik
        initialValues={data ? data : initialValues}
        onSubmit={(values, { resetForm }) => {
          handleSubmit(values);
          if (!saveComments && saveAndContinue) {
            resetForm();
          }
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
