import React, { useState, useEffect } from "react";
import { Formik, useFormikContext } from "formik";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import * as Yup from "yup";
import Button from "@material-ui/core/Button";

import { Container, ContentForm, TitleForm, Header } from "./styles";

const FormSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().required(),
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

const CommentsForm = ({ toSubmit, afterSubmit }) => {
  const classes = useStyles();
  const [initialValues] = useState({
    name: "",
    email: "",
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
      <Header>
        <TitleForm>Comments</TitleForm>
        <Button
          variant="outlined"
          size="small"
          color="primary"
          onClick={() => console.log("inserir")}
        >
          Insert comment
        </Button>
      </Header>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log("valuesss comments", values)}
        validationSchema={FormSchema}
      >
        {({ handleChange, errors, handleSubmit, values, touched }) => (
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
            {toSubmit && <AutoSubmitToken />}
          </ContentForm>
        )}
      </Formik>
    </Container>
  );
};

export default CommentsForm;
