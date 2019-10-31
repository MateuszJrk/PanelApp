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

// import React from "react";
// import { Link } from "react-router-dom";
// import isAuthenticated from "./isAuthenticated";

// const Header = () => (
//   <header>
//     <h1>React Auth0 App</h1>
//     <nav>
//       <ul>
//         <li>
//           <Link to="/">Top</Link>
//         </li>
//         <li>
//           <Link to="/private">Private</Link>
//         </li>
//         {!isAuthenticated() && (
//           <li>
//             <Link to="/login">Login</Link>
//           </li>
//         )}
//         {isAuthenticated() && (
//           <li>
//             <Link to="/logout">Logout</Link>
//           </li>
//         )}
//       </ul>
//     </nav>
//   </header>
// );

// export default Header;
