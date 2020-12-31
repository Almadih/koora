import React from "react";
import {
  Avatar,
  Box,
  Grid,
  Paper,
  Divider,
  Container,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { deepOrange, deepPurple } from "@material-ui/core/colors";
import emoji from "react-easy-emoji";
import { connect } from "react-redux";
import AppBar from "../AppBar/AppBar";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import MatchDetailsSkeleton from "../Skeleton/MatchDetailsSkeleton";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));

function MatchDetails(props) {
  const match = props.matches.find(
    (match) => match._id === props.match.params.id
  );
  const classes = useStyles();
  const notFound = (
    <Box mt={4}>
      <div className="text-center">
        <h1>{emoji("Match Not Found ⚽❗")} </h1>
      </div>
    </Box>
  );
  return (
    <div>
      <AppBar title="Match Details" />
      <Container>
        <Box my={12}>
          {props.appStatus.isLoading ? <MatchDetailsSkeleton /> : null}
          {!props.appStatus.isLoading && !match ? (
            notFound
          ) : (
            <Paper>
              <Box p={3}>
                <Grid item xs={12}>
                  <Grid container justify="space-evenly" spacing={4}>
                    <Grid container item xs={3}>
                      <Grid container justify="flex-end">
                        <Avatar className={`avatar-x2 ${classes.orange}`}>
                          A
                        </Avatar>
                      </Grid>
                    </Grid>
                    <Grid container item xs={6} justify="center">
                      <Grid item>
                        <div className="text-center">
                          <div className="result">
                            {match?.team_a?.goal_counts}
                          </div>
                          <div className="result">-</div>
                          <div className="result">
                            {match?.team_b?.goal_counts}
                          </div>
                        </div>
                      </Grid>
                    </Grid>
                    <Grid container item xs={3}>
                      <Grid container justify="flex-start">
                        <Avatar className={`avatar-x2 ${classes.purple}`}>
                          B
                        </Avatar>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Box mt={1}>
                  <Grid item xs={12}>
                    <h4 className="text-center">
                      {new Date(match?.time).toDateString()}
                    </h4>
                  </Grid>
                </Box>
                <Box my={2}>
                  <Divider />
                  <h2 className="text-center">Goals</h2>
                </Box>
                <Grid container item xs={12}>
                  <Grid xs={6} item>
                    {match?.team_a?.goals.map((goal) => (
                      <h4 key={goal._id}>
                        {`${goal.player?.name}  `}(
                        {Array(goal.count).fill(emoji("⚽"))} )
                      </h4>
                    ))}
                  </Grid>
                  <Grid xs={6} item className="text-right">
                    {match?.team_b?.goals.map((goal) => (
                      <h4 key={goal._id}>
                        {`${goal.player?.name} `}({" "}
                        {Array(goal.count).fill(emoji("⚽"))} )
                      </h4>
                    ))}
                  </Grid>
                </Grid>
                <Box my={2}>
                  <Divider />
                  <h2 className="text-center">Players</h2>
                </Box>
                <Grid container item xs={12}>
                  <Grid xs={6} item>
                    {match?.team_a?.players.map((player) => (
                      <h4 key={player._id}>{player?.name}</h4>
                    ))}
                  </Grid>
                  <Grid xs={6} item className="text-right">
                    {match?.team_b?.players.map((player) => (
                      <h4 key={player._id}>{player?.name}</h4>
                    ))}
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          )}
        </Box>
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => ({
  matches: state.matches,
  appStatus: state.appStatus,
});

export default connect(mapStateToProps)(withRouter(MatchDetails));
