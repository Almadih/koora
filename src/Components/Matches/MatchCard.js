import React from "react";
import {
  Avatar,
  Box,
  Grid,
  Paper,
  Divider,
  CardActionArea,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { deepOrange, deepPurple } from "@material-ui/core/colors";
import emoji from "react-easy-emoji";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

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

function MatchCard(props) {
  const { matchData } = props;
  const classes = useStyles();
  return (
    <Box mt={4}>
      <CardActionArea onClick={()=>props.history.push(`/matches/view/${matchData?._id}`)} >
        <Paper>
          <Box p={3}>
            <Grid item xs={12}>
              <Grid container justify="space-evenly" spacing={4}>
                <Grid container item xs={3}>
                  <Grid container justify="flex-end">
                    <Avatar className={`avatar-x2 ${classes.orange}`}>A</Avatar>
                  </Grid>
                </Grid>
                <Grid container item xs={6} justify="center">
                  <Grid item>
                    <div className="text-center">
                      <div className="result">{matchData?.team_a?.goal_counts}</div>
                      <div className="result">-</div>
                      <div className="result">{matchData?.team_b?.goal_counts}</div>
                    </div>
                  </Grid>
                </Grid>
                <Grid container item xs={3}>
                  <Grid container justify="flex-start">
                    <Avatar className={`avatar-x2 ${classes.purple}`}>B</Avatar>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Box mt={1}>
              <Grid item xs={12}>
                <h4 className="text-center">
                  {new Date(matchData?.time).toDateString()}
                </h4>
              </Grid>
            </Box>
            <Box my={2}>
              <Divider />
            </Box>
            <Grid container item xs={12}>
              <Grid xs={6} item>
                {matchData?.team_a?.goals.map((goal) => (
                  <h4 key={goal._id}>
                    {`${goal.player?.name}  `}(
                    {Array(goal.count).fill(emoji("⚽"))} )
                  </h4>
                ))}
              </Grid>
              <Grid xs={6} item className="text-right">
                {matchData?.team_b?.goals.map((goal) => (
                  <h4 key={goal._id}>
                    {`${goal.player?.name} `}({" "}
                    {Array(goal.count).fill(emoji("⚽"))} )
                  </h4>
                ))}
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </CardActionArea>
    </Box>
  );
}

export default withRouter(MatchCard)