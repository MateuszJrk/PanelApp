/* eslint no-restricted-globals: 0 */

import React from "react";
import { Provider } from "react-redux";
import { useAuth0 } from "./pages/auth/React-auth0-spa";
import store from "./redux/store/index";
// import Routes from "./routes/Routes";
import Loader from "./components/Loader";
import Login from "./pages/auth/SignIn";
import Profile from "./pages/auth/Profile";
import PrivateRoute from "./pages/auth/Profile";
import DashboardLayout from "./layouts/Dashboard";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  const { loading } = useAuth0();

  if (loading) {
    return <Loader />;
  }

  return (
    <Provider store={store}>
      {/* <Routes /> */}
      <BrowserRouter>
        <header>
          <Login />
        </header>
        <Switch>
          <Route path="/" exact />
          <Route path="/main" component={DashboardLayout} />
          <PrivateRoute path="/profile" component={Profile} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
