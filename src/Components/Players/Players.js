import React, { Component } from "react";
import AppBar from "../AppBar/AppBar";
import { connect } from "react-redux";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  Paper,
  Container,
  IconButton,
  Icon,
  Grid,
  Box,
  Fab,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Button
} from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import { withRouter } from "react-router-dom";
import { deletePlayer } from "../Redux/Actions";

class Players extends Component {
  state = {
    showModal:false,
    player:{}
  }
  deletePlayer = () => {
    this.props.dispatch(deletePlayer(this.state.player));
    this.toggleModal(false)
  };

toggleModal = (status)=>{
  this.setState({showModal:status})
}

setPlayerToDelete = (player)=>{
  this.setState({player:player})
  this.toggleModal(true)
}

  render() {
    return (
      <div>
        <AppBar title="Players" />
        <Container>
          <Grid container justify="center">
            <Grid item md={8} xs={12}>
              <Box my={12}>
                <TableContainer component={Paper}>
                  <Table aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Goals</TableCell>
                        {this.props.auth.isLoggedin ? (
                          <TableCell aria-hidden="true">Actions</TableCell>
                        ) : null}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {this.props.appStatus.isLoading
                        ? null
                        : this.props.players.map((player,i) => (
                            <TableRow key={player._id}>
                              <TableCell>{i+1}</TableCell>
                              <TableCell className="cairo" >{player.name}</TableCell>
                              <TableCell>{player.goals}</TableCell>
                              {this.props.auth.isLoggedin ? (
                                <TableCell>
                                  <IconButton
                                    onClick={() =>
                                      this.props.history.push({
                                        pathname: `players/edit/${player._id}`,
                                        state: { player },
                                      })
                                    }
                                  >
                                    <Icon>edit</Icon>
                                  </IconButton>
                                  <IconButton
                                    onClick={() => this.setPlayerToDelete(player)}
                                  >
                                    <Icon>delete</Icon>
                                  </IconButton>
                                </TableCell>
                              ) : null}
                            </TableRow>
                          ))}
                      {this.props.appStatus.isLoading
                        ? [1, 2, 3, 4,5,6,7].map((i) => (
                            <TableRow key={i}>
                              <TableCell>
                                <Skeleton variant="text" />
                              </TableCell>
                              <TableCell>
                                <Skeleton variant="text" />
                              </TableCell>
                              <TableCell>
                                <Skeleton variant="text" />
                              </TableCell>
                              {this.props.auth.isLoggedin ? (
                                <TableCell>
                                  <Skeleton variant="text" />
                                </TableCell>
                                
                              ) : null}

                            </TableRow>
                          ))
                        : null}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </Grid>
          </Grid>
          <span hidden={!this.props.auth.isLoggedin}>

          <Fab
            color="primary"
            className="fab"
            onClick={() => this.props.history.push("/players/new")}
            aria-label="add"
            >
            <Icon>add</Icon>
          </Fab>
            </span>
        </Container>
        <Dialog
        open={this.state.showModal}
        onClose={()=>this.toggleModal(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Delete player</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           Are you sure want to delete player <b>{this.state.player.name}</b> ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>this.toggleModal(false)}  color="primary">
            Cancel
          </Button>
          <Button onClick={this.deletePlayer}  color="secondary" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  players: state.players,
  auth: state.auth,
  appStatus: state.appStatus,
});

export default connect(mapStateToProps)(withRouter(Players));
