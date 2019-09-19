import React from "react";
import { Link } from "react-router-dom";
import Auth from "./Auth";

import { Button, Card, CardBody, Form } from "reactstrap";

const auth = new Auth();

const SignIn = () => (
  <React.Fragment>
    <div className="text-center mt-4">
      <p className="lead">Sign in to your account to continue</p>
    </div>

    <Card>
      <CardBody>
        <div className="m-sm-4">
          <Form>
            <div className="text-center mt-3">
              <Link to="/main">
                <Button color="primary" size="lg" onClick={auth.login}>
                  Sign in
                </Button>
              </Link>
            </div>
          </Form>
        </div>
      </CardBody>
    </Card>
  </React.Fragment>
);

export default SignIn;
