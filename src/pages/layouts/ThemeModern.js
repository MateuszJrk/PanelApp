import React from "react";
import { connect } from "react-redux";
import Dashboard from "../../layouts/Dashboard";
import { enableModernTheme } from "../../redux/actions/themeActions";

class ThemeModern extends React.Component {
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(enableModernTheme());
  }

  render() {
    return <Dashboard />;
  }
}

export default connect()(ThemeModern);
