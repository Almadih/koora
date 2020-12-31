import {
  Container,
  Paper,
  Box,
  Grid,
  Avatar,
  Divider,
  TextField,
  Button,
} from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";
import AppBar from "../AppBar/AppBar";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { newMatch } from "../Redux/Actions";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

class NewMatch extends Component {
  state = {
    teamAPlayers: [],
    teamBPlayers: [],
    players: [],
  };

  static getDerivedStateFromProps(props, state) {
    return {
      ...state,
      players: props.players
        .filter((player) =>
          state.teamAPlayers.find((p) => p._id === player._id) ? false : true
        )
        .filter((player) =>
          state.teamBPlayers.find((p) => p._id === player._id) ? false : true
        ),
    };
  }

  setGoals = (value, playerId, type) => {
    const updatedList = this.state[type].map((player) => {
      if (player._id === playerId) {
        player.goalsCount = value;
      }
      return player;
    });
    this.setState({ [type]: updatedList });
  };

  submit = ()=>{
    const {teamAPlayers,teamBPlayers} = this.state
    let team_a = {players:[],goals:[]}
    let team_b = {players:[],goals:[]}

    team_a.players = teamAPlayers.map(player=>player._id)
    team_a.goals = teamAPlayers.map(player=>{
      if(player.goalsCount > 0){
        return {player:player._id,count:parseInt(player.goalsCount)}
      }
      return null
    }).filter(player=> player?true:false)

    team_b.players = teamBPlayers.map(player=>player._id)
    team_b.goals = teamBPlayers.map(player=>{
      if(player.goalsCount > 0){
        return {player:player._id,count:parseInt(player.goalsCount)}
      }
      return null
    }).filter(player=> player?true:false)
  
    this.props.dispatch(newMatch({team_a,team_b})).then(res=>this.props.history.goBack())
  }

  render() {
    return (
      <div>
        <AppBar title="New Match" />
        <Container>
          <Box my={12}>
            <Paper>
              <Box p={3}>
                <Grid item container xs={12}>
                  <Grid container justify="space-evenly" spacing={4}>
                    <Grid container item xs={3}>
                      <Grid container justify="flex-end">
                        <Avatar className="avatar-x2 orange">A</Avatar>
                      </Grid>
                    </Grid>
                    <Grid container item xs={6} justify="center">
                      <Grid item>
                        <div className="text-center">
                          <div className="result">-</div>
                        </div>
                      </Grid>
                    </Grid>
                    <Grid container item xs={3}>
                      <Grid container justify="flex-start">
                        <Avatar className="avatar-x2 purple">B</Avatar>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Box my={2}>
                  <Divider />
                </Box>
                <Box px={3}>
                  <Grid container item xs={12} justify="center">
                    <Grid container xs={12} item>
                      <Grid item xs={12} container>
                        <Box mb={3}>
                          <Autocomplete
                            getOptionSelected={() => {}}
                            onChange={(event, newValue) => {
                              this.setState({ teamAPlayers: newValue });
                            }}
                            multiple
                            options={this.state.players}
                            getOptionLabel={(option) => option.name}
                            style={{ width: 300 }}
                            renderInput={(params) => (
                              <TextField {...params} label="Team A Players" />
                            )}
                          />
                        </Box>
                      </Grid>
                      {this.state.teamAPlayers.map((player) => (
                        <Grid
                          container
                          item
                          xs={12}
                          className="mb-3"
                          key={player._id}
                        >
                          <Grid item xs={8}>
                            <p>{player.name}</p>
                          </Grid>
                          <Grid item xs={4}>
                            <TextField
                              label="Goals"
                              value={player.goalsCount}
                              variant="outlined"
                              onChange={(e) =>
                                this.setGoals(
                                  e.target.value,
                                  player._id,
                                  "teamAPlayers"
                                )
                              }
                            />
                          </Grid>
                        </Grid>
                      ))}
                    </Grid>
                    <Grid xs={12} container item>
                      <Grid item xs={12}>
                        <Box my={4}>
                          <Divider />
                        </Box>
                      </Grid>
                      <Grid item xs={12} container>
                        <Box mb={3}>
                          <Autocomplete
                            onChange={(event, newValue) => {
                              this.setState({ teamBPlayers: newValue });
                            }}
                            multiple
                            options={this.state.players}
                            getOptionLabel={(option) => option.name}
                            style={{ width: 300 }}
                            renderInput={(params) => (
                              <TextField {...params} label="Team B Players" />
                            )}
                          />
                        </Box>
                      </Grid>
                      {this.state.teamBPlayers.map((player) => (
                        <Grid
                          key={player._id}
                          container
                          item
                          xs={12}
                          className="mb-3"
                        >
                          <Grid item xs={8}>
                            <Box>
                              <p>{player.name}</p>
                            </Box>
                          </Grid>
                          <Grid item xs={4}>
                            <TextField
                              label="Goals"
                              value={player.goalsCount}
                              variant="outlined"
                              onChange={(e) =>
                                this.setGoals(
                                  e.target.value,
                                  player._id,
                                  "teamBPlayers"
                                )
                              }
                            />
                          </Grid>
                        </Grid>
                      ))}
                    </Grid>
                  </Grid>
                </Box>
            <Grid container justify="center" >
              <Grid item xs={6}>
                <Box my={4}>

              <Button fullWidth color="primary" onClick={this.submit} variant="contained" >Save</Button>
                </Box>
              </Grid>
            </Grid>
              </Box>
            </Paper>
          </Box>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  players: state.players.map((player) => {
    player.goalsCount = 0;
    return player;
  }),
});

export default connect(mapStateToProps)(withRouter(NewMatch));
