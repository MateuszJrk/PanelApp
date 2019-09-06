import * as types from "../constants";
import _ from "lodash";

const initialState = {
  data: [],
  text: "",
  sortColumn: { path: "title", order: "asc" },
  pageSize: 10
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.GET_DATA:
      console.log("action!");
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
      console.log("click!");
      console.log(action.payload);
      const filtered = state.data;

      return {
        ...state,
        text: action.text,
        data: action.text
          ? filtered.filter(obj => {
              return obj.name.toLowerCase().includes(action.text.toLowerCase());
            })
          : action.payload
      };
    case types.SORT_DATA:
      console.log("click!");
      const sorted = { ...state.data };
      console.log(action.path);
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
    case types.CHANGE_PAGE_SIZE:
      return {
        ...state,
        pageSize: action.pageSize
      };
    default:
      return state;
  }
}
