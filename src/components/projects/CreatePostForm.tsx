import React from "react";
import { Button, LinearProgress } from "@material-ui/core";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";
import { CREATE_SONG } from "../../urql/mutations";
import { useMutation } from "urql";

function CreatePostForm() {
  const [, updateSong] = useMutation(CREATE_SONG);

  return (
    <div className="form">
      <Formik
        initialValues={{
          title: "",
          owner: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(async () => {
            setSubmitting(false);
            // console.log(values);
            // const newLyric = {title:"From client",owner:'DasJames'};
            updateSong(values).then((result) => console.log(result));
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
              type="owner"
              name="owner"
              id="filled-full-width"
              label="Owner"
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
