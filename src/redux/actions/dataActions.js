import * as types from "../constants";
import getData from "../../components/Data";

export const fetchData = () => async dispatch => {
  const res = await getData();
  dispatch({
    type: types.GET_DATA,
    payload: res
  });
};

// export const fetchPosts = () => async dispatch => {
//   const response = await jsonPlaceholder.get("/posts");
//   dispatch({ type: "FETCH_POSTS", payload: response.data });
// };
