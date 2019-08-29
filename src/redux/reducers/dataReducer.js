import * as types from "../constants";

const initialState = {
  data: [],
  text: ""
};

export default function(state = initialState, action) {
  console.log(state, action);
  switch (action.type) {
    case types.GET_DATA:
      return {
        data: action.payload
      };
    case types.FILTER_DATA:
      console.log(state);

      return state.filter(({ dat }) => (dat.isFiltered ? dat : null));

    case types.FILTER_DATA_ALL:
      return {
        data: action.payload
      };
    case types.SEARCH_DATA:
      return {
        ...state,
        text: action.text
      };

    default:
      return state;
  }
}
