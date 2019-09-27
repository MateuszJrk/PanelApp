import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import sidebar from "./sidebarReducers";
import layout from "./layoutReducer";
import theme from "./themeReducer";
import data from "./dataReducer";

import { reducer as toastr } from "react-redux-toastr";

export default combineReducers({
  sidebar,
  layout,
  theme,
  toastr,
  getData: data,
  form: formReducer
});
