import * as types from "../constants";
import getData from "../../components/Data";

const res = getData();
export const fetchData = () => {
  return {
    type: types.GET_DATA,
    payload: res
  };
};

export const filterData = () => {
  return {
    type: types.FILTER_DATA,
    payload: res
  };
};

export const filterDataAll = () => {
  return {
    type: types.FILTER_DATA_ALL,
    payload: res
  };
};

export const searchData = (text = "") => {
  return {
    type: types.SEARCH_DATA,
    text,
    payload: res
  };
};
