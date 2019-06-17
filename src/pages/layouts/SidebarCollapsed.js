import React from "react";
import { connect } from "react-redux";
import Dashboard from "../../layouts/Dashboard";
import { showSidebar, hideSidebar } from "../../redux/actions/sidebarActions";

class SidebarCollapsed extends React.Component {
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(hideSidebar());
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch(showSidebar());
  }

  render() {
    return <Dashboard />;
  }
}

export default connect()(SidebarCollapsed);
