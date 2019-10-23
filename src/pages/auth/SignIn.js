import React from "react";
// import { Link } from "react-router-dom";
import { useAuth0 } from "./react-auth0-spa";
import { Button, Card, CardBody, Form } from "reactstrap";

const SignIn = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <React.Fragment>
      <div className="text-center mt-4">
        <p className="lead">Sign in to your account to continue</p>
      </div>

      <Card>
        <CardBody>
          <div className="m-sm-4">
            <Form>
              <div className="text-center mt-3">
                {!isAuthenticated && (
                  <Button onClick={() => loginWithRedirect({})}>Log in</Button>
                )}

                {isAuthenticated && (
                  <Button onClick={() => logout()}>Log out</Button>
                )}
              </div>
            </Form>
          </div>
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

export default SignIn;
