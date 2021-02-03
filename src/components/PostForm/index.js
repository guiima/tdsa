import React, { useState } from "react";
import { Formik } from "formik";
import TextField from "@material-ui/core/TextField";
import { Container, ContentForm } from "./styles";
import * as Yup from "yup";

const FormSchema = Yup.object().shape({
  title: Yup.string().required(),
  body: Yup.string().required(),
});

const PostForm = () => {
  const [initialValues] = useState({
    title: "",
    body: "",
  });

  return (
    <Container>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log("valuesss", values)}
        validationSchema={FormSchema}
      >
        {({ handleChange, errors, handleSubmit, values }) => (
          <ContentForm>
            <TextField
              label="title"
              type="text"
              value={values.title}
              onChange={handleChange("title")}
              variant="outlined"
            />
            {errors.title && <h3>{errors.title}</h3>}

            <TextField
              label="Body"
              type="text"
              value={values.body}
              onChange={handleChange("body")}
              multiline
              rows={4}
              variant="outlined"
            />
            {errors.body && <h3>{errors.body}</h3>}

            <button onClick={handleSubmit}>salvar</button>
          </ContentForm>
        )}
      </Formik>
    </Container>
  );
};

export default PostForm;
