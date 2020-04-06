import * as covid from "./covidDeathDataType";

const initialState = {
  deathloading: true,
  Deathdata: [],
  detaherr: null,
  end: false
};

const CovidDeathreducer = (state = initialState, action) => {
  switch (action.type) {
    case covid.COVID_DEATH_LIVETRACKING_FETCH_END:
      return {
        ...state,
        end: true
      };
    case covid.COVID_DEATH_LIVETRACKING_FETCH_DATA:
      return {
        ...state,
        deathloading: true
      };

    case covid.COVID_DEATH_LIVETRACKING_FETCH_SUCCESS:
      return {
        ...state,
        deathloading: false,
        Deathdata: action.payload,
        detaherr: ""
      };

    case covid.COVID_DEATH_LIVETRACKING_FETCH_ERR:
      return {
        ...state,
        deathloading: false,
        Deathdata: [],
        detaherr: action.payload
      };

    default:
      return state;
  }
};

export default CovidDeathreducer;
