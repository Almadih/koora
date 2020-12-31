import {
  Box,
  Container,
  Paper,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";
import React, { useState } from "react";
import AppBar from "../AppBar/AppBar";
import store from "../Redux/Store";
import { editPlayer } from "../Redux/Actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

function EditPlayer(props) {
  const player = props.players.find(
    (player) => player._id === props.match.params.id
  );
  const [name, setName] = useState(player?.name);

  const handelTextFieldChange = (e) => {
    setName(e.target.value);
  };

  const submit = () => {
    store.dispatch(editPlayer({ ...player, name })).then(res=>{
      props.history.goBack()
    })
  };
  return (
    <div>
      <AppBar title="Edit Player" />
      <Container>
        <Grid container justify="center">
          <Grid item md={8} xs={12}>
            <Box py={4} mt={8} >
              <Paper>
                <Box p={4}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="name"
                    name="name"
                    autoFocus
                    value={name}
                    onChange={handelTextFieldChange}
                  />
                  <Box my={4}>
                    <Button
                      fullWidth
                      variant="contained"
                      color="primary"
                      disabled={name === ""}
                      onClick={submit}
                    >
                      Add
                    </Button>
                  </Box>
                </Box>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => ({
  players: state.players,
});

export default connect(mapStateToProps)(withRouter(EditPlayer));
