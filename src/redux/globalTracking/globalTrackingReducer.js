import * as covid from "./globalTrackingType";

const initialState = {
  loading: true,
  data: [],
  err: null,
  end: false
};

const globalreducer = (state = initialState, action) => {
  switch (action.type) {
    case covid.COVID_GLOBAL_LIVETRACKING_FETCH_END:
      return {
        ...state,
        end: true
      };
    case covid.COVID_GLOBAL_LIVETRACKING_FETCH_DATA:
      return {
        ...state,
        loading: true
      };

    case covid.COVID_GLOBAL_LIVETRACKING_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        err: ""
      };

    case covid.COVID_GLOBAL_LIVETRACKING_FETCH_ERR:
      return {
        ...state,
        loading: false,
        data: [],
        err: action.payload
      };

    default:
      return state;
  }
};

export default globalreducer;
