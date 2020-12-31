import {
  Box,
  Container,
  Table,
  TableCell,
  TableContainer,
  TableBody,
  TableHead,
  Paper,
  TableRow,
  Button,
  Grid,
} from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";
import AppBar from "../AppBar/AppBar";
import MatchCard from "../Matches/MatchCard";
import MatchCardSkeleton from "../Skeleton/matchCardSkeleton";
import { Link } from "react-router-dom";
import Skeleton from "@material-ui/lab/Skeleton";
import emoji from 'react-easy-emoji'
class Home extends Component {
  render() {
    return (
      <div>
        <AppBar />
        <Container>
          <Grid container justify="center">
            <Grid item md={8} xs={12}>
              <Box my={10}>
                <h3>Last Match</h3>
                {this.props.appStatus.isLoading ? (
                  <MatchCardSkeleton />
                ) : (
                  <MatchCard matchData={this.props.lastMatch} />
                )}
              </Box>
            </Grid>
          </Grid>
          <Grid item container xs={12} justify="center">
            <Link to="/matches">
              <Button variant="outlined" type="link" color="primary">
                View All
              </Button>
            </Link>
          </Grid>
          <Grid container justify="center">
            <Grid item md={8} xs={12}>
              <Box mb={4}>
                <h3>Top Players</h3>
              </Box>
              <Box my={4}>
                <TableContainer component={Paper}>
                  <Table aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Goals</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {this.props.appStatus.isLoading
                        ? null
                        : this.props.players.map((player,i) => (
                            <TableRow key={player._id}>
                              <TableCell className="cairo" >{player.name}</TableCell>
                              <TableCell>{player.goals} {i === 0 && player.goals > 5 ?emoji('🔥🔥'):null}</TableCell>
                            </TableRow>
                          ))}
                      {this.props.appStatus.isLoading
                        ? [1, 2, 3, 4].map((i) => (
                            <TableRow key={i}>
                              <TableCell>
                                <Skeleton variant="text" />
                              </TableCell>
                              <TableCell>
                                <Skeleton variant="text" />
                              </TableCell>
                            </TableRow>
                          ))
                        : null}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </Grid>
            <Grid item container xs={12} justify="center">
              <Link to="/players">
                <Button variant="outlined" type="link" color="primary">
                  View All
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  lastMatch: state.matches[0],
  players: state.players.slice(0, 4),
  appStatus: state.appStatus,
});

export default connect(mapStateToProps)(Home);
