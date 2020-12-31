import playerReducer from "./PlayerReducer";
import matchesReducer from "./MatchesReducer";
import authReducer from './AuthReducer'
import appStatusReducer from './AppStatusReducer'

const reducers = {
  players: playerReducer,
  matches: matchesReducer,
  auth:authReducer,
  appStatus:appStatusReducer
};
export default reducers;
