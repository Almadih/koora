import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Button,
  Container,
  Typography,
  TextField,
  Box,
  CssBaseline,
} from "@material-ui/core";
import GoBack from "../Utils/GoBack";
import store from "../Redux/Store";
import { login } from "../Redux/Actions";
import { withRouter } from "react-router-dom";
import types from "../Redux/Actions/types";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  container: {
    marginTop: theme.spacing(8),
  },
}));

function SignIn(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const classes = useStyles();
  const submit = () => {
    store
      .dispatch(login({ username, password }))
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        store.dispatch({ type: types.LOGIN });
        props.history.goBack();
      })
      .catch(console.log);
  };

  const handelTextFieldChange = (e) => {
    if (e.target.name === "username") {
      setUsername(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  return (
    <Container component="main" maxWidth="xs" className={classes.container}>
      <CssBaseline />
      <GoBack />
      <Box my={4}>
        <Paper>
          <Box p={4}>
            <div className={classes.paper}>
              <Typography component="h1" variant="h5">
                Login
              </Typography>
              <form className={classes.form} noValidate>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoFocus
                  value={username}
                  onChange={handelTextFieldChange}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={handelTextFieldChange}
                />
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={submit}
                >
                  Login
                </Button>
              </form>
            </div>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}

export default withRouter(SignIn);
