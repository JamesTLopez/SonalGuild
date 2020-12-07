import React from "react";
import { Button, LinearProgress, MenuItem } from "@material-ui/core";
import { Formik, Field } from "formik";
import { TextField } from "formik-material-ui";
import { CREATE_SONG } from "../../urql/mutations";
import { useMutation } from "urql";
import { useHistory } from "react-router-dom";

const ranges = [
  {
    value: 'C',
    label: 'C',
  },
  {
    value: 'C#',
    label: 'C#',
  },  
  {
    value: 'D',
    label: 'D',
  },  
  {
    value: 'D#',
    label: 'D#',
  },
  {
    value: 'E',
    label: 'E',
  },
  {
    value: 'F',
    label: 'F',
  },
  {
    value: 'F#',
    label: 'F#',
  },
  {
    value: 'G',
    label: 'G',
  },
  {
    value: 'G#',
    label: 'G#',
  },  
  {
    value: 'A',
    label: 'A',
  },
  {
    value: 'A#',
    label: 'A#',
  },
  {
    value: 'B',
    label: 'B',
  },
];


const scales = [
  {
    value: 'major',
    label: 'Major',
  },
  {
    value: 'minor',
    label: 'Minor',
  }

];


function CreatePostForm() {
  const [, createPost] = useMutation(CREATE_SONG);

  const history = useHistory();

  return (
    <div className="form">
      <Formik
        initialValues={{
          title: "",
          description: "",
          key: "C",
          scaleType: "major",
         
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(async () => {
            setSubmitting(false);
            const { error } = await createPost(values);

            console.log(error)
            if (error?.message.includes("Not authenticated")) {
              history.push("/authentication/login");
            }

            console.log(values)
   
          }, 500);
        }}
      >
        {({ submitForm, isSubmitting, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
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

            <Field
              component={TextField}
              type="key"
              name="key"
              label="Key"
              style={{ margin: "1em 0" }}
              select
              variant="standard"
              helperText="Please select key"
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            >
              {ranges.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Field>

            <Field
              component={TextField}
              label="Scale Type"
              type="scaleType"
              name="scaleType"
              id="filled-full-width"
              style={{ margin: "1em 0" }}
              select
              variant="standard"
              helperText="Please select scale"
              margin="normal"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            >
              {scales.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Field>

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
          </form>
        )}
      </Formik>
    </div>
  );
}

export default CreatePostForm;
