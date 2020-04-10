import * as covid from "./globalTrackingType";
import axios from "axios";

export const fetchRequest = () => {
  return {
    type: covid.COVID_GLOBAL_LIVETRACKING_FETCH_DATA
  };
};

export const end = () => {
  return {
    type: covid.COVID_GLOBAL_LIVETRACKING_FETCH_END
  };
};

export const fetchSucess = data => {
  return {
    type: covid.COVID_GLOBAL_LIVETRACKING_FETCH_SUCCESS,
    payload: data
  };
};

export const fetchError = errData => {
  return {
    type: covid.COVID_GLOBAL_LIVETRACKING_FETCH_ERR,
    payload: errData
  };
};

const fetchglobalCovid = () => {
  return dispatch => {
    dispatch(fetchRequest);
    axios
      .get(
        "https://api.covid19india.org/state_district_wise.json"
      )
      .then(response => {
        const data = response.data;
        console.log(data)
        
        dispatch(fetchSucess(data));
      })
      .catch(err => {
        const errror = err.data;
        dispatch(fetchError(errror));
      });
  };
};


export default fetchglobalCovid;
