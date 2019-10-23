import React from "react";
import { connect } from "react-redux";

import { filterData, filterDataAll } from "../../../redux/actions/dataActions";

import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpinner,
  faCheckCircle,
  faStopCircle,
  faClock
} from "@fortawesome/free-solid-svg-icons";

const Filters = props => {
  return (
    <UncontrolledDropdown className="mt-4 ml-2">
      <DropdownToggle tag="a">
        <span className="text-primary">+ Add filter</span>
      </DropdownToggle>
      <DropdownMenu right>
        <DropdownItem
          onClick={() => {
            return props.dispatch(filterDataAll());
          }}
        >
          All
        </DropdownItem>
        <DropdownItem>Unprocessed</DropdownItem>
        <DropdownItem>
          <FontAwesomeIcon
            icon={faCheckCircle}
            className="cursor-pointer text-success mr-1 "
          />
          Preview
        </DropdownItem>
        <DropdownItem onClick={() => props.dispatch(filterData())}>
          <FontAwesomeIcon
            icon={faSpinner}
            className="cursor-pointer text-info mr-1 "
          />
          Composing
        </DropdownItem>
        <DropdownItem>
          <FontAwesomeIcon
            icon={faStopCircle}
            className="cursor-pointer text-danger mr-1"
          />
          Error
        </DropdownItem>
        <DropdownItem>
          <FontAwesomeIcon
            icon={faClock}
            className="cursor-pointer text-warning mr-1 "
          />
          Initiated
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

const mapStateToProps = state => {
  return { data: state.data.data, filter: state.data.text };
};

export default connect(mapStateToProps)(Filters);
