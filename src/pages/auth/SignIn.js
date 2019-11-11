import React from "react";
import { Link } from "react-router-dom";
import isAuthenticated from "./isAuthenticated";
import { Button, Card, CardBody } from "reactstrap";

const SignIn = () => (
  <React.Fragment>
    <div className="text-center mt-4">
      <h2>Welcome back</h2>
      <p className="lead">Sign in to your account to continue</p>
    </div>

    <Card>
      <CardBody>
        <div className="m-sm-4">
          <div className="text-center mt-3">
            {!isAuthenticated() && (
              <Link to="/login">
                <Button color="primary" size="lg">
                  Login
                </Button>
              </Link>
            )}
            {isAuthenticated() && (
              <Link to="/logout">
                <Button color="primary" size="lg">
                  Logout
                </Button>
              </Link>
            )}
          </div>
        </div>
      </CardBody>
    </Card>
  </React.Fragment>
);

export default SignIn;
