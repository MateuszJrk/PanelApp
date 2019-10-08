import * as types from "../constants";
import _ from "lodash";

const initialState = {
  data: [],
  text: "",

  sortColumn: { path: "title", order: "asc" },
  value: false,
  isChecked: []
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
    case types.ON_CHANGE:
      // console.log(state.isChecked);

      return {
        ...state,
        value: action.value === "false" ? "true" : "false",
        id: action.id,
        isChecked: state.isChecked.includes(action.id)
          ? [...state.isChecked].filter(el => el !== action.id)
          : [...state.isChecked, action.id],
        name: action.name
      };
    case types.DELETE_DATA:
      console.log(state.isChecked);
      return {
        ...state
        // data:
        //   state.isChecked.length > 0
        //     ? action.payload.map(obj => {
        //         return state.isChecked.includes(obj._id)
        //           ? action.payload.filter(
        //               el => el._id !== state.isChecked.map(el._id)
        //             )
        //           : action.payload;
        //       })
        //     : action.payload
      };

    default:
      return state;
  }
}
