import { useEffect, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Players from "./Components/Players/Players";
import Matches from "./Components/Matches/Matches";
import NewMatch from './Components/Matches/NewMatch'
import MatchDetails from './Components/Matches/MatchDetails'
import Login from './Components/Login/Login'
import NewPlayer from './Components/Players/NewPlayer'
import EditPlayer from './Components/Players/EditPlayer'
import store from "./Components/Redux/Store";
import {
  fetchPlayers,
  fetchMatches,
  loginCheck,
  fetchCachedData,
  setAppStatus
} from "./Components/Redux/Actions";
import {
  Snackbar,
} from "@material-ui/core";
import types from "./Components/Redux/Actions/types";
import cache from './Components/API/CacheHandler'
import {connect} from 'react-redux'


const loadData = () => {
  return Promise.allSettled([
    store.dispatch(loginCheck),
    store.dispatch(fetchMatches),
    store.dispatch(fetchPlayers),
  ]);
};

function App(props) {

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    store.dispatch(setAppStatus(types.SET_APP_STATUS_OFFLINE,{isOffline:false}))
  };

  useEffect(() => {
    loadData()
      .then((results) => {
        results.forEach(result=>{
          if(result.status === 'rejected'){
            store.dispatch(setAppStatus(types.SET_APP_STATUS_OFFLINE,{isOffline:true}))
            let data = cache.fetchCache(result.reason.config.url)
            const type = result.reason.config.url === '/player'?types.FETCH_PLAYERS:types.FETCH_MATCHES
            store.dispatch(fetchCachedData({type,payload:data}))
          }else{
            cache.store(result)
          }
        })
        store.dispatch(setAppStatus(types.SET_APP_STATUS_LOADING,{isLoading:false}))

      })
  }, []);


  return (
    <Fragment>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/players">
          <Players />
        </Route>
        <Route exact path="/players/new">
          <NewPlayer />
        </Route>
        <Route exact path="/players/edit/:id">
          <EditPlayer />
        </Route>
        <Route exact path="/matches">
          <Matches />
        </Route>
        <Route exact path="/matches/view/:id">
          <MatchDetails />
        </Route>
        <Route exact path="/matches/new">
          <NewMatch />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
      <Snackbar
        open={props.appStatus.isOffline}
        message="You are Offline and Viewing Cached Data"
        onClose={handleClose}
        autoHideDuration={3000}
        key="test"
        />
        </Fragment>
  );
}
const mapStateToProps = (state) =>({
  appStatus:state.appStatus
})
export default connect(mapStateToProps)(App);
