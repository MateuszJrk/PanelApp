import * as types from "../constants";
import getData from "../../components/Data";

export const getDataa = () => dispatch => {
  const res = getData();
  console.log(res);
  dispatch({
    type: types.GET_DATA,
    payload: res
  });
};
