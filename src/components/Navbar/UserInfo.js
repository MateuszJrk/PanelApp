import React from "react";

import {
  Collapse,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ServerStatus from "./ServerStatus";
import avatar1 from "../../assets/img/avatars/avatar.jpg";
import { PieChart, Settings, User } from "react-feather";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const UserInfo = () => {
  return (
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

            <DropdownItem>Log out</DropdownItem>
            {/* <div>
              {!isAuthenticated && (
                <button onClick={() => loginWithRedirect({})}>Log in</button>
              )}

              {isAuthenticated && (
                <button onClick={() => logout()}>Log out</button>
              )}
              {isAuthenticated && (
                <span>
                  <Link to="/">Home</Link>&nbsp;
                  <Link to="/profile">Profile</Link>
                </span>
              )}
            </div> */}
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
    </Collapse>
  );
};

export default UserInfo;
