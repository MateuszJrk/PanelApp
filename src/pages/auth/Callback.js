import React, { Component } from "react";
import Auth from "../auth/Auth";
import Loader from "../../components/Loader";

class Callback extends Component {
  componentDidMount() {
    const auth = new Auth();
    auth.handleAuthentication();
  }
  render() {
    return <Loader />;
  }
}

export default Callback;
