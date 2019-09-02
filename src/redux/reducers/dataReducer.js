import * as types from "../constants";

const initialState = {
  data: [],
  text: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.GET_DATA:
      return {
        ...state,
        data: action.payload
      };

    case types.FILTER_DATA:
      console.log(action.payload);
      return {
        ...state,
        data: action.payload.filter(obj => {
          return obj.isFiltered ? obj : null;
        })
      };
    case types.FILTER_DATA_ALL:
      return {
        ...state,
        data: action.payload
      };
    case types.SEARCH_DATA:
      console.log(action.payload);
      const filtered = state.data.filter(obj => {
        return obj.name.toLowerCase().includes(action.text.toLowerCase());
      });
      const test = state.data;

      return {
        ...state,
        text: action.text.length ? action.text : "",
        data: action.text.length ? filtered : test
      };

    default:
      return state;
  }
}
