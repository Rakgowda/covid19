import * as covid from "./covidDeathDataType";
import axios from "axios";

export const fetchRequest = () => {
  return {
    type: covid.COVID_DEATH_LIVETRACKING_FETCH_DATA
  };
};

export const end = () => {
  return {
    type: covid.COVID_DEATH_LIVETRACKING_FETCH_END
  };
};

export const fetchSucess = data => {
  return {
    type: covid.COVID_DEATH_LIVETRACKING_FETCH_SUCCESS,
    payload: data
  };
};

export const fetchError = errData => {
  return {
    type: covid.COVID_DEATH_LIVETRACKING_FETCH_ERR,
    payload: errData
  };
};

const fetchCovidDeaths = () => {
  return dispatch => {
    dispatch(fetchRequest);
    axios
      .get(
        "https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise/history"
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


export default fetchCovidDeaths;
