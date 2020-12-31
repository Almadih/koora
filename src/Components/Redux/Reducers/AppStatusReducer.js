import types from '../Actions/types'

const initState = {
    isLoading:true,
    isOffline:false
}

export default function appStatusReducer(state=initState,action){
    switch(action.type){
        case types.SET_APP_STATUS_LOADING:{
            return {...state,...action.payload}
        }
        case types.SET_APP_STATUS_OFFLINE:{
            return {...state,...action.payload}
        }
        default: return state
    }
}