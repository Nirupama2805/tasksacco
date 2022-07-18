import { GET_OPTIONS,SAVE_DETAILS } from "./ActionTypes";
import axios from 'axios';
export const GetOptionsData = () => {
    console.log("GetOptionsData");
    return async (dispatch) => { 
        return axios.get(`http://localhost:3001/`)
        .then(res => {
           let response = res.data;
           console.log('response',response)
            dispatch({
                type:GET_OPTIONS,
                options : response
            })
        })
    }
}

export const SaveDetails = (obj) => {
    console.log(obj);
    console.log("GetOptionsData");

    
    return async (dispatch) => {
           try {
                dispatch({
                type: SAVE_DETAILS,
                details: obj
            });
        }
         catch (error) {
            
        }
    }
}