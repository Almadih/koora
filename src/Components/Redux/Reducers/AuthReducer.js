import types from "../Actions/types";

const initState = {
    isLoggedin:false
};

export default function authReducer(state = initState, action) {
  switch (action.type) {
    case types.LOGIN_CHECK: {
        
      return action.payload;
    }
    case types.LOGIN: {
      return {isLoggedin:true}
    }
    case types.LOGOUT: {
      return {isLoggedin:false}
    }
    default:
      return state;
  }
}
