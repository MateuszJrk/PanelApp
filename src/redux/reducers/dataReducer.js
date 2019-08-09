import * as types from "../constants";

const initialState = {
  data: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.GET_DATA:
      return {
        ...state,
        data: action.payload
      };

    default:
      return state;
  }
}
