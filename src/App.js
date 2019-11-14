import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store/index";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import DashboardLayout from "./layouts/Dashboard";
import SignIn from "./pages/auth/SignIn";
import Login from "./pages/auth/Login";
import Logout from "./pages/auth/Logout";

const App = () => {
  return (
    <Provider store={store}>
      {/* <Routes /> */}
      <BrowserRouter>
        <Switch>
          {/* <Route path="/" exact />
          <Route path="/main" component={DashboardLayout} /> */}
          <Route exact path="/" component={SignIn} />
          <Route path="/main" component={DashboardLayout} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
