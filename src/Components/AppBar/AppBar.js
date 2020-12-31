import React, { useState } from "react";
import {
  Button,
  AppBar,
  IconButton,
  Typography,
  Toolbar,
  Icon,
  Grid,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  SwipeableDrawer,
} from "@material-ui/core";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { logout } from "../Redux/Actions";
function AppBarWrapper(props) {
  const [drawer, setDrawer] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawer(open);
  };

  const list = [
    {
      text:'Home',
      icon:'home',
      path:'/'
    },
    {
      text:'Matches',
      icon:'sports_soccer',
      path:'/matches'
    },
    {
      text:'Players',
      icon:'supervisor_account',
      path:'/players'
    },
  ]

  return (
    <AppBar position="fixed" color="secondary">
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item xs={2}>
            <span hidden={props.location.pathname === "/"}>
              <IconButton
                color="inherit"
                onClick={() =>
                  props.history.length < 3
                    ? props.history.push("/")
                    : props.history.goBack()
                }
              >
                <Icon color="inherit">west</Icon>
              </IconButton>
            </span>
            <span hidden={props.location.pathname !== "/"}>
              <IconButton color="inherit" onClick={() => setDrawer(true)}>
                <Icon color="inherit">menu</Icon>
              </IconButton>
            </span>
          </Grid>
          <Grid container className="text-center" alignContent="center" xs={8} item>
            <Typography variant="h6">
              {props.title ? props.title : "Koora"}
            </Typography>
          </Grid>

          <Grid xs={2} item container justify="flex-end">
            <div hidden={props.auth.isLoggedin}>
              <Button
                color="inherit"
                onClick={() => props.history.push("/login")}
              >
                Login
              </Button>
            </div>
            <div hidden={!props.auth.isLoggedin}>
              <Button
                color="inherit"
                onClick={() => {
                  props.dispatch(logout);
                }}
              >
                Logout
              </Button>
            </div>
          </Grid>
        </Grid>
      </Toolbar>
      <SwipeableDrawer
        anchor="left"
        open={drawer}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <div
          role="presentation"
          style={{
            width: 250,
          }}
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {
              list.map((l,i)=>(

            <ListItem button key={i} onClick={()=>props.history.push(l.path)} >
              <ListItemIcon>
                <Icon>{l.icon}</Icon>
              </ListItemIcon>
              <ListItemText primary={l.text} />
            </ListItem>
              ))
            }
            
          </List>
          <Divider />
        </div>
      </SwipeableDrawer>
    </AppBar>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(withRouter(AppBarWrapper));
