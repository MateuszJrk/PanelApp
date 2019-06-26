import React from "react";
import {
  Col,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class DropdownSelect extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <Col xs="6" xl className="mb-2 ml-2">
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret>50</DropdownToggle>
          <DropdownMenu>
            <DropdownItem>75</DropdownItem>
            <DropdownItem>100</DropdownItem>
            <DropdownItem>150</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Col>
    );
  }
}
export default DropdownSelect;
