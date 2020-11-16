import React from "react";
import { Button, LinearProgress } from "@material-ui/core";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";
import { CREATE_SONG } from "../../urql/mutations";
import { useMutation } from "urql";
import {useHistory} from "react-router-dom"

function CreatePostForm() {
  const [, createPost] = useMutation(CREATE_SONG);

  const history = useHistory();

  return (
    <div className="form">
      <Formik
        initialValues={{
          title: "",
          description: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(async () => {
            setSubmitting(false);

            // const newLyric = {title:"From client",owner:'DasJames'};
            await createPost(values);
            // history.push('/song')
          }, 500);
        }}
      >
        {({ submitForm, isSubmitting }) => (
          <Form>
            <div className="title">
              <h1>Create Song</h1>
            </div>
            <Field
              component={TextField}
              name="title"
              type="text"
              label="Title"
              style={{ margin: "1em 0" }}
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
            <br />
            <Field
              component={TextField}
              type="description"
              name="description"
              id="filled-full-width"
              label="description"
              style={{ margin: "1em 0" }}
              placeholder=" "
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
            <br />

            <div className="button-group">
              <Button
                variant="contained"
                color="primary"
                style={{ background: "#2a9d8f" }}
                disabled={isSubmitting}
                onClick={submitForm}
              >
                Create Post
              </Button>
            </div>
            {isSubmitting && <LinearProgress />}
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default CreatePostForm;
