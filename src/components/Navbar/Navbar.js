import React from "react";
import { connect } from "react-redux";

import { toggleSidebar } from "../../redux/actions/sidebarActions";
import { searchData } from "../../redux/actions/dataActions";

import {
  Collapse,
  Navbar,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Form,
  Input
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { PieChart, Settings, User } from "react-feather";
import ServerStatus from "./ServerStatus";
import avatar1 from "../../assets/img/avatars/avatar.jpg";

class NavbarComponent extends React.Component {
  render() {
    return (
      <>
        <Navbar color="white" light expand className="border-0">
          <span
            className="sidebar-toggle d-flex mr-2"
            onClick={() => {
              console.log(this.props);
              this.props.dispatch(toggleSidebar());
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
              onChange={e => searchData(e.target.value)}
              // onChange={e => {
              //   this.props.dispatch(searchData(e.target.value));
              // }}
            />
          </Form>

          <Collapse navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <span className="d-none d-sm-inline-block">
                  <DropdownToggle nav caret>
                    <FontAwesomeIcon
                      icon={faInfoCircle}
                      className=" text-primary fa-lg "
                    />
                  </DropdownToggle>
                </span>
                <DropdownMenu right>
                  <DropdownItem>
                    <ServerStatus />
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <span className="d-inline-block d-sm-none">
                  <DropdownToggle nav caret>
                    <Settings size={18} className="align-middle" />
                  </DropdownToggle>
                </span>
                <span className="d-none d-sm-inline-block">
                  <DropdownToggle nav caret>
                    <img
                      src={avatar1}
                      className="avatar img-fluid rounded-circle mr-1"
                      alt="Chris Wood"
                    />
                    <span className="text-dark">Chris Wood</span>
                  </DropdownToggle>
                </span>
                <DropdownMenu right>
                  <DropdownItem>
                    <User size={18} className="align-middle mr-2" />
                    Profile
                  </DropdownItem>
                  <DropdownItem>
                    <PieChart size={18} className="align-middle mr-2" />
                    Analytics
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Settings & Privacy</DropdownItem>
                  <DropdownItem>Help</DropdownItem>
                  <DropdownItem>Sign out</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return { getData: state.getData.data, filter: state.getData };
};

export default connect(
  mapStateToProps,
  { searchData }
)(NavbarComponent);
