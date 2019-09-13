import * as types from "../constants";
import getData from "../../components/Data";

const data = getData();

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
export const deleteData = id => {
  return {
    type: types.DELETE_DATA,
    payload: { data, id },
    id
  };
};
export const changeCheckbox = id => {
  return {
    type: types.ON_CHANGE_CHECKBOX,
    payload: id
  };
};
