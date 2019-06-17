import React from "react";
import { connect } from "react-redux";
import Dashboard from "../../layouts/Dashboard";
import { enableClassicTheme } from "../../redux/actions/themeActions";

class ThemeClassic extends React.Component {
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(enableClassicTheme());
  }

  render() {
    return <Dashboard />;
  }
}

export default connect()(ThemeClassic);
