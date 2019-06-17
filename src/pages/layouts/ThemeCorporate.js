import React from "react";
import { connect } from "react-redux";
import Dashboard from "../../layouts/Dashboard";
import { enableCorporateTheme } from "../../redux/actions/themeActions";

class ThemeCorporate extends React.Component {
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(enableCorporateTheme());
  }

  render() {
    return <Dashboard />;
  }
}

export default connect()(ThemeCorporate);
