import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { dashboard as dashboardRoutes } from "./index";

import DashboardLayout from "../layouts/Dashboard";
import Login from "../pages/auth/SignIn";
import Page404 from "../pages/auth/Page404";
import ScrollToTop from "../components/ScrollToTop";
import Callback from "../pages/auth/Callback";
import Auth from "../pages/auth/Auth";
// import Loader from "../components/Loader";

const auth = new Auth();

const ChildRoutes = ({ layout: Layout, routes }) => (
  <Layout>
    <Switch>
      {routes.map((category, index) =>
        category.children ? (
          // Route item with children
          category.children.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact
              component={route.component}
            />
          ))
        ) : (
          // Route item without children
          <Route
            key={index}
            path={category.path}
            exact
            component={category.component}
          />
        )
      )}
    </Switch>
  </Layout>
);

const Routes = () => (
  <Router>
    <ScrollToTop>
      <Switch>
        {/* Dashboard routes */}
        <Route
          path="/"
          exact
          component={() => (
            <ChildRoutes layout={Login} routes={dashboardRoutes} />
          )}
        />
        <Route
          path="/callback"
          exact
          component={() => (
            <ChildRoutes layout={Callback} routes={dashboardRoutes} />
          )}
        />
        <Route
          path="/main"
          exact
          component={() =>
            auth.isAuthenticated() ? (
              <ChildRoutes layout={DashboardLayout} routes={dashboardRoutes} />
            ) : (
              <ChildRoutes layout={DashboardLayout} routes={dashboardRoutes} />
            )
          }
        />
        <Route
          path="/error"
          exact
          component={() => (
            <ChildRoutes layout={Page404} routes={dashboardRoutes} />
          )}
        />
        {/* <Route
          path="/test"
          exact
          component={() => (
            <ChildRoutes layout={Loader} routes={dashboardRoutes} />
          )}
        /> */}
      </Switch>
    </ScrollToTop>
  </Router>
);

export default Routes;
