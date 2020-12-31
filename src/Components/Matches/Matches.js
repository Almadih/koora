import { Box, Container, Grid, Fab, Icon } from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";
import AppBar from "../AppBar/AppBar";
import MatchCard from "./MatchCard";
import MatchCardSkeleton from "../Skeleton/matchCardSkeleton";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

class Matches extends Component {
  render() {
    return (
      <div>
        <AppBar title="Matches" />
        <Container>
          <Box my={8}>
          {this.props.appStatus.isLoading
            ? null
            : this.props.matches.map((match) => (
                <Grid container justify="center" key={match._id}>
                  <Grid item md={8} xs={12}>
                      <MatchCard matchData={match} />
                  </Grid>
                </Grid>
              ))}
          {this.props.appStatus.isLoading
            ? [1, 2, 3, 4].map((i) => (
                <Grid container justify="center" key={i}>
                  <Grid item md={8} xs={12}>
                    <Box>
                      <MatchCardSkeleton />
                    </Box>
                  </Grid>
                </Grid>
              ))
            : null}
        </Box>
        </Container>
        <span hidden={!this.props.auth.isLoggedin} >

        <Fab
          color="primary"
          className="fab"
          onClick={() => this.props.history.push("/matches/new")}
          aria-label="add"
          >
          <Icon>add</Icon>
        </Fab>
            </span>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  matches: state.matches,
  appStatus: state.appStatus,
  auth:state.auth
});

export default connect(mapStateToProps)(withRouter(Matches));
