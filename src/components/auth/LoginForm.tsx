import React from "react";
import { Link ,useHistory} from "react-router-dom";
import { Button, LinearProgress } from "@material-ui/core";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";
import { useMutation } from "urql";
import {LOGIN_MUTATION} from "../../urql/mutations";

interface Values {
  email?: string;
  password?: string;
}

function LoginForm() {
  let history = useHistory();
  const [, login] = useMutation(LOGIN_MUTATION);


  return (
    <div className="login-container">
      <div className="title">
        <h1>START YOUR SONG WRITING! </h1>
        <p>Please login to your account.</p>
      </div>
      <div className="sep"></div>
      <div className="form">
      <Formik
          initialValues={{
            username: "",
            password: ""
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
            }

            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(async () => {
              setSubmitting(false);
              await login(values);
 
              // alert(JSON.stringify(values, null, 2));
              history.push('/dashboard')
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
              <br />
              <div className="button-group">
                <Button
                  variant="contained"
                  color="primary"
                  style={{ background: "#2a9d8f" }}
                  disabled={isSubmitting}
                  onClick={submitForm}
                >
                  Login
                </Button>
                <Link to={`/authentication/register`}>
                  Don't have an account? Register Here!
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

export default LoginForm;
