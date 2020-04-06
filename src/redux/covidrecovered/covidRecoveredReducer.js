import * as covid from "./covidRecoveredType";

const initialState = {
  deathloading: true,
  RecoveredData: [],
  detaherr: null,
  end: false
};

const CovidRecoveredreducer = (state = initialState, action) => {
  switch (action.type) {
    case covid.COVID_RECOVERED_LIVETRACKING_FETCH_END:
      return {
        ...state,
        end: true
      };
    case covid.COVID_RECOVERED_LIVETRACKING_FETCH_DATA:
      return {
        ...state,
        deathloading: true
      };

    case covid.COVID_RECOVERED_LIVETRACKING_FETCH_SUCCESS:
      return {
        ...state,
        deathloading: false,
        RecoveredData: action.payload,
        detaherr: ""
      };

    case covid.COVID_RECOVERED_LIVETRACKING_FETCH_ERR:
      return {
        ...state,
        deathloading: false,
        RecoveredData: [],
        detaherr: action.payload
      };

    default:
      return state;
  }
};

export default CovidRecoveredreducer;
