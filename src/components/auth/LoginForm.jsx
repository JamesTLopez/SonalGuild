import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function LoginForm() {
  return (
    <div className="login-container">
      <div className="title">
        <h1>START YOUR SONG WRITING! </h1>
        <p>Please login to your account.</p>
        <p>Dont have an account? Register now!</p>
      </div>
      <div className="sep"></div>
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
        <Button
          variant="contained"
          color="primary"
          style={{ background: "#2a9d8f" }}
        >
          Login
        </Button>
      </div>
    </div>
  );
}

export default LoginForm;
