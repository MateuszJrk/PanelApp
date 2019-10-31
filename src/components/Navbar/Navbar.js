import React from "react";
import { connect } from "react-redux";
import { toggleSidebar } from "../../redux/actions/sidebarActions";
import { searchData } from "../../redux/actions/dataActions";
import UserInfo from "./UserInfo";
import { Navbar, Form, Input } from "reactstrap";

class NavbarComponent extends React.Component {
  render() {
    return (
      <>
        <Navbar color="white" light expand className="border-0">
          <span
            className="sidebar-toggle d-flex mr-2"
            onClick={() => {
              this.props.toggleSidebar();
            }}
          >
            <i className="hamburger align-self-center" />
          </span>

          <Form inline>
            <Input
              type="text"
              placeholder="Search ..."
              aria-label="Search"
              className="form-control-no-border mr-sm-2"
              value={this.props.filter}
              onChange={e => {
                this.props.searchData(e.target.value);
              }}
            />
          </Form>
          <UserInfo />
        </Navbar>
      </>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.data);
  return { data: state.data.data, filter: state.data.text };
};

export default connect(
  mapStateToProps,
  { searchData, toggleSidebar }
)(NavbarComponent);
