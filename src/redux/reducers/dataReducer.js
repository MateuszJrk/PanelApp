import * as types from "../constants";
import _ from "lodash";

const initialState = {
  data: [],
  text: "",
  sortColumn: { path: "title", order: "asc" },
  id: "",
  isChecked: new Map()
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.GET_DATA:
      return {
        ...state,
        data: action.payload
      };

    case types.FILTER_DATA:
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
      return {
        ...state,
        text: action.text,
        data: action.text
          ? action.payload.filter(obj => {
              return obj.name.toLowerCase().includes(action.text.toLowerCase());
            })
          : action.payload
      };

    case types.SORT_DATA:
      const sorted = { ...state.data };
      if (state.sortColumn.path === action.path)
        state.sortColumn.order =
          state.sortColumn.order === "asc" ? "desc" : "asc";
      else {
        state.sortColumn.path = action.path;
        state.sortColumn.order = "asc";
      }

      return {
        ...state,
        data: _.orderBy(sorted, state.sortColumn.path, state.sortColumn.order)
      };
    case types.DELETE_DATA:
      console.log(action.payload.data);
      return {
        ...state,
        id: state.isChecked,
        data:
          state.isChecked === "true"
            ? action.payload.data.filter(obj => {
                return obj;
              })
            : action.payload.data
      };
    case types.ON_CHANGE_CHECKBOX:
      const item = state.data[0].name;
      const isChecked = !state.isChecked;
      console.log(item);
      return {
        ...state,
        isChecked: state.isChecked.set(item, isChecked)
      };

    default:
      return state;
  }
}
