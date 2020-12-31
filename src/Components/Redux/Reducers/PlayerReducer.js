import types from '../Actions/types'

const initState = []

export default function PlayerReducer(state=initState,action){
    switch(action.type){
        case types.FETCH_PLAYERS:{
            return action.payload
        }
        case types.NEW_PLAYER:{
            return [...state,action.payload]
        }
        case types.EDIT_PLAYER:{
            return state.map(player=> player._id === action.payload._id?{...player,...action.payload}:player )
        }
        case types.DELETE_PLAYER:{
            return state.filter(player=> player._id !== action.payload._id)
        }
        default:return state
    }
}