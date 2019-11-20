import * as types from "../constants";

const data = require("../../components/packages_50.json");
export const fetchData = () => {
  return {
    type: types.GET_DATA,
    payload: data
  };
};

export const filterData = () => {
  return {
    type: types.FILTER_DATA,
    payload: data
  };
};

export const filterDataAll = () => {
  return {
    type: types.FILTER_DATA_ALL,
    payload: data
  };
};

export const searchData = (text = "") => {
  return {
    type: types.SEARCH_DATA,
    text,
    payload: data
  };
};

export const sortData = (path = "") => {
  return {
    type: types.SORT_DATA,
    payload: data,
    path
  };
};
export const deleteData = () => {
  return {
    type: types.DELETE_DATA,
    payload: data
  };
};
export const onChange = id => {
  return {
    type: types.ON_CHANGE,
    id
  };
};
export const setStartDate = startDate => ({
  type: "SET_START_DATE",
  startDate
});

export const setEndDate = endDate => ({
  type: "SET_END_DATE",
  endDate
});
