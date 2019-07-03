import React from "react";

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
  const { onFilterSelect } = props;

  return (
    <UncontrolledDropdown className="mt-4 ml-2">
      <DropdownToggle tag="a">
        <span className="text-primary">+ Add filter</span>
      </DropdownToggle>
      <DropdownMenu right>
        <DropdownItem>All</DropdownItem>
        <DropdownItem>Unprocessed</DropdownItem>
        <DropdownItem>
          <FontAwesomeIcon
            icon={faCheckCircle}
            className="cursor-pointer text-success mr-1 "
          />
          Preview
        </DropdownItem>
        <DropdownItem onClick={() => onFilterSelect()}>
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

export default Filters;
