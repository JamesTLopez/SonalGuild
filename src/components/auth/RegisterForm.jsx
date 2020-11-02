import React from "react";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function RegisterForm() {
  return (
    <div className="register-container">
      <div className="title">
        <h1>CREATE AN ACCOUNT </h1>
        <p>Please put in the required information.</p>
        <p>Already have an account? Register now!</p>
      </div>

      <div className="form">
        <TextField
          id="filled-full-width"
          label="Username"
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
          <Link to={`/authentication/login`}>Already have an account? Login Here!</Link>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
