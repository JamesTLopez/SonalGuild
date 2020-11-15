import React from "react";
import { Link } from "react-router-dom";
import { Button, LinearProgress } from "@material-ui/core";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";
import { useMutation } from "urql";
import { REGISTER_MUTATION } from "../../urql/mutations";

interface Values {
  email?: string;
  password?: string;
}

function RegisterForm() {
  const [, register] = useMutation(REGISTER_MUTATION);

  return (
    <div className="register-container">
      <div className="title">
        <h1>CREATE AN ACCOUNT </h1>
        <p>Please put in the required information.</p>
        <p>Already have an account? Register now!</p>
      </div>

      <div className="form">
        <Formik
          initialValues={{
            username: "",
            password: "",
            confirmPassword: "",
          }}
          validate={(values): Values => {
            let errors: any = {};

            if (!values.username) {
              errors.username = "Required";
            }

            if (!values.password) {
              errors.password = "Required";
            } else if (values.password.length < 5) {
              errors.password = "Password must be longer than 5 characters";
            } else if (values.password !== values.confirmPassword) {
              errors.password = "Passwords must be equal";
              errors.confirmPassword = "Passwords must be equal";
            }

            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(async () => {
              setSubmitting(false);
              console.log(values);
              let res = await register(values);
              console.log(res);
              // alert(JSON.stringify(values, null, 2));
            }, 500);
          }}
        >
          {({ submitForm, isSubmitting }) => (
            <Form>
              <Field
                component={TextField}
                name="username"
                type="text"
                label="Username"
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
                type="password"
                name="password"
                id="filled-full-width"
                label="Password"
                style={{ margin: "1em 0" }}
                placeholder=""
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
              <Field
                component={TextField}
                type="password"
                name="confirmPassword"
                id="filled-full-width"
                label="Confirm Password"
                style={{ margin: "1em 0" }}
                placeholder=""
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
                  Register
                </Button>
                <Link to={`/authentication/login`}>
                  Already have an account? Login Here!
                </Link>
              </div>
              {isSubmitting && <LinearProgress />}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default RegisterForm;

/* <FormControl>
<TextField
  id="filled-full-width"
  label="Username"
  style={{ margin: "1em 0" }}
  placeholder="
  fullWidth
  margin="normal"
  InputLabelProps={{
    shrink: true,
  }}
  variant="outlined"
/>
<TextField
  id="filled-full-width"
  label="Password"
  style={{ margin: "1em 0" }}
  placeholder=""
  fullWidth
  margin="normal"
  InputLabelProps={{
    shrink: true,
  }}
  variant="outlined"
/>
<TextField
  id="filled-full-width"
  label="Confirm Password"
  style={{ margin: "1em 0" }}
  placeholder=""
  fullWidth
  margin="normal"
  InputLabelProps={{
    shrink: true,
  }}
  variant="outlined"
/>
<div className="button-group">
  <Button
    variant="contained"
    color="primary"
    style={{ background: "#2a9d8f" }}
  >
    Register
  </Button>
  <Link to={`/authentication/login`}>
    Already have an account? Login Here!
  </Link>
</div>
</FormControl> */
