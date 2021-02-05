import React, { useEffect, useState } from "react";
import { Formik, useFormikContext } from "formik";
import TextField from "@material-ui/core/TextField";
import * as Yup from "yup";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import { commentsTypes } from "../../../../redux/types/comments";

import { Container, ContentForm, TitleForm, Header, useStyles } from "./styles";

const FormSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().required(),
  body: Yup.string().required(),
});

const AutoSubmit = ({ afterSubmit }) => {
  const { submitForm } = useFormikContext();

  React.useEffect(() => {
    submitForm();
    afterSubmit();
  }, [submitForm, afterSubmit]);
  return null;
};

const AutoClear = ({ afterSubmit }) => {
  const { resetForm } = useFormikContext();

  React.useEffect(() => {
    resetForm();
    afterSubmit();
  }, [resetForm, afterSubmit]);
  return null;
};

const CommentsForm = ({ postId }) => {
  const classes = useStyles();
  const [toSubmit, setToSubmit] = useState(false);
  const [toClear, setToClear] = useState(false);
  const dispatch = useDispatch();
  const clearForm = useSelector((state) => state.comments.clearFormComments);
  const [initialValues] = useState({
    name: "",
    email: "",
    body: "",
  });

  useEffect(() => {
    if (clearForm) {
      setToClear(true);
      dispatch({
        type: commentsTypes.CLEAR_COMMENT,
        payload: false,
      });
    }
  }, [clearForm, dispatch]);

  const handleSubmit = (values) => {
    dispatch({
      type: commentsTypes.SET_COMMENT,
      payload: values,
    });

    if (!postId) {
      dispatch({
        type: commentsTypes.SAVE_COMMENT,
        payload: true,
      });
    }
  };

  return (
    <Container>
      <Header>
        <TitleForm>Comments</TitleForm>
        <Button
          variant="outlined"
          size="small"
          color="primary"
          onClick={() => setToSubmit(true)}
        >
          Insert comment
        </Button>
      </Header>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { resetForm }) => {
          handleSubmit(values);
          resetForm();
        }}
        validationSchema={FormSchema}
      >
        {({ handleChange, errors, values, touched }) => (
          <ContentForm>
            <TextField
              label="name"
              type="text"
              value={values.name}
              onChange={handleChange("name")}
              variant="outlined"
              className={classes.input}
            />
            {errors.name && touched.name && <h3>{errors.name}</h3>}

            <TextField
              label="email"
              type="text"
              value={values.email}
              onChange={handleChange("email")}
              variant="outlined"
              className={classes.input}
            />
            {errors.email && touched.email && <h3>{errors.email}</h3>}

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
            {toSubmit && <AutoSubmit afterSubmit={() => setToSubmit(false)} />}
            {toClear && <AutoClear afterSubmit={() => setToClear(false)} />}
          </ContentForm>
        )}
      </Formik>
    </Container>
  );
};

export default CommentsForm;
