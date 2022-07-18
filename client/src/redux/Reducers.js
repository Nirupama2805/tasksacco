import { 
    GET_OPTIONS, SAVE_DETAILS,
  } from "./ActionTypes";
import { combineReducers } from 'redux';
  const INITIAL_STATE = {
    Options: {},
    Jobs:[],
  };

function OptionReducer (state = INITIAL_STATE, action){

    switch (action.type) {
      case GET_OPTIONS: {
        return{
          ...state,
          Options: action.options,
        };
      }
      case SAVE_DETAILS: {
        console.log("reducer",action.details)
        return {
          ...state,
          Jobs: [...state.Jobs,action.details],
        };
      }
      default:
        return state;
    }
  };
console.log(INITIAL_STATE.Options)
const rootReducer = combineReducers({
  option:OptionReducer  
  });
export default rootReducer;