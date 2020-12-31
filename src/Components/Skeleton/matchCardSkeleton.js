import React from "react";
import { Box, Grid, Paper, Divider } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";


export default function MatchCardSkiliton(props) {

  return (
    <Box mt={4}>
      <Paper>
        <Box p={3}>
          <Grid item xs={12}>
            <Grid container justify="space-evenly" spacing={4}>
              <Grid container item xs={3}>
                <Grid container justify="flex-end">
                  <Skeleton variant="circle" className="avatar-x2" />
                </Grid>
              </Grid>
              <Grid container item xs={6} justify="center">
                <Grid item>
                  <div className="text-center">
                    <div className="result">
                      <Skeleton variant="text" />
                    </div>
                    <div className="result">-</div>
                    <div className="result">
                      <Skeleton variant="text" />
                    </div>
                  </div>
                </Grid>
              </Grid>

              <Grid container item xs={3}>
                <Grid container justify="flex-start">
                  <Skeleton variant="circle" className="avatar-x2" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Box mt={1}>
          <Grid item xs={12} justify="center" container>
                <Grid item xs={5}>
              <h4>
                <Skeleton variant="text" />
              </h4>
                </Grid>
            </Grid>
          </Box>
          <Box my={2}>
            <Divider />
          </Box>
          <Grid container item xs={12}>
          <Grid xs={6} item>
            <Grid item container md={4} xs={10}>
                <Grid item xs={12}>
                  <p>
                    <Skeleton variant="text" />
                  </p>
                </Grid>
                <Grid item xs={12}>
                  <p>
                    <Skeleton variant="text" />
                  </p>
                </Grid>
              </Grid>
            </Grid>
            <Grid xs={6} item container justify="flex-end">
            <Grid item container md={4} xs={10}>
                <Grid item xs={12}>
                  <p>
                    <Skeleton variant="text" />
                  </p>
                </Grid>
                <Grid item xs={12}>
                  <p>
                    <Skeleton variant="text" />
                  </p>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
}
