import * as covid from "./covidRecoveredType";
import axios from "axios";

export const fetchRequest = () => {
  return {
    type: covid.COVID_RECOVERED_LIVETRACKING_FETCH_DATA
  };
};

export const end = () => {
  return {
    type: covid.COVID_RECOVERED_LIVETRACKING_FETCH_END
  };
};

export const fetchSucess = data => {
  return {
    type: covid.COVID_RECOVERED_LIVETRACKING_FETCH_SUCCESS,
    payload: data
  };
};

export const fetchError = errData => {
  return {
    type: covid.COVID_RECOVERED_LIVETRACKING_FETCH_ERR,
    payload: errData
  };
};

const fetchCovidRecovered = () => {
  return dispatch => {
    dispatch(fetchRequest);
    axios
      .get(
        "https://api.covid19api.com/country/india/status/recovered/live"
      )
      .then(response => {
        const data = response.data;
        
        dispatch(fetchSucess(data));
      })
      .catch(err => {
        const errror = err.data;
        dispatch(fetchError(errror));
      });
  };
};


export default fetchCovidRecovered;
