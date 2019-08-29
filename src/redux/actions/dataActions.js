import * as types from "../constants";
import getData from "../../components/Data";

export const fetchData = () => {
  const res = getData();
  return {
    type: types.GET_DATA,
    payload: res
  };
};

export const filterData = isFiltered => {
  return {
    type: types.FILTER_DATA,
    isFiltered
  };
};

export const filterDataAll = isFiltered => {
  return {
    type: types.FILTER_DATA_ALL,
    isFiltered
  };
};

export const searchData = (text = "") => ({
  type: "SEARCH_DATA",
  text
});
