import { combineReducers } from 'redux'

function exercise(state = [] , action){
  if(action.type === "GET_EXERCISE"){
    return[...state, action.value]
  }
  if(action.type === "CREATE_EXERCISE"){
    return[...state, action.value]
  }
  if(action.type === "DELETE_EXERCISE"){
    state.splice(action.value.index,1)
    return [...state]
  }
  return state
}
  function WorkoutPlan(state = {}, action){
    return state
  }
  function isAuthenicated(state = false, action){
    if(action.type === "isAuthenicated"){
      return state = action.value.success
    }
    return state
  }
  
const rootReducer = combineReducers({
  exercise, WorkoutPlan, isAuthenicated
})

export default rootReducer