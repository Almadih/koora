import api from "../../API";
import types from "./types";

export const fetchPlayers = async (dispatch) => {
  const res = await api.get("/player");
  dispatch({ type: types.FETCH_PLAYERS, payload: res.data.data });
  return res;
};

export const fetchMatches = async (dispatch) => {
  const res = await api.get("/match");
  dispatch({ type: types.FETCH_MATCHES, payload: res.data.data });
  return res;
};

export const loginCheck = (dispatch) => {
  const isLoggedin = localStorage.getItem("token") ? true : false;
  dispatch({ type: types.LOGIN_CHECK, payload: { isLoggedin } });
};

export const logout = (dispatch) => {
  localStorage.removeItem('token')
  dispatch({ type: types.LOGOUT });
};

export const fetchCachedData = (data) => {
  return (dispatch) => {
    dispatch(data);
  };
};

export const setAppStatus = (type, payload) => {
  return (dispatch) => {
    dispatch({ type, payload });
  };
};

export const login = ({ username, password }) => {
  return async (dispatch) => {
    const res = await api.post("/admin/login", { username, password });
    return res
  };
};

export const newPlayer = ({name})=>{
  return async(dispatch)=>{
    const res = await api.post('/player/new',{name})
    dispatch({type:types.NEW_PLAYER,payload:res.data.data})
  }
}

export const editPlayer = (player)=>{
  return async(dispatch)=>{
    const res = await api.put(`/player/${player._id}`,player)
    dispatch({type:types.EDIT_PLAYER,payload:res.data.data})
  }
}

export const deletePlayer = (player)=>{
  return async(dispatch)=>{
    const res = await api.delete(`/player/${player._id}`)
    dispatch({type:types.DELETE_PLAYER,payload:player})
    return res
  }
}

export const newMatch = ({team_a,team_b})=>{
  return async(dispatch)=>{
    await api.post('/match/new',{team_a,team_b})
    const res = await api.get("/match");
    dispatch({ type: types.FETCH_MATCHES, payload: res.data.data });
    const res2 = await api.get("/player");
    dispatch({ type: types.FETCH_PLAYERS, payload: res2.data.data });
    return res2;
  }
}