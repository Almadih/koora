import types from '../Actions/types'

const initState = []

export default function matchesReducer(state=initState,action){
    switch(action.type){
        case types.FETCH_MATCHES:{
            return action.payload
        }
        case types.NEW_MATCH:{
            return [...state,action.payload]
        }
        default: return state
    }
}