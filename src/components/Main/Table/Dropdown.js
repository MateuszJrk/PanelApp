import React from "react";

import { Col } from "reactstrap";
import styled from "styled-components";

const Select = styled.select`
  cursor: pointer;
  background: #495057;
  font-size: 14px;
  border-radius: 3px;
  color: white;
  border: 2px solid #495057;
  width: 40px;
  height: 33px;
  transition: 0.5s all ease-out;
  position: center;
  &:hover {
    background-color: #000000;
    color: white;
  }
  @media screen and (max-width: 40em) {
    font-size: 15px;
    width: 45px;
  }
`;

const Option = styled.option`
  background: white;
  color: black;
`;

class DropdownSelect extends React.Component {
  render() {
    return (
      <Col xs="6" xl className="mb-2 ml-2">
        <Select
          value={this.props.pageSize.value}
          onChange={e => {
            this.props.onChange(e);
          }}
        >
          <Option value="10">10</Option>
          <Option value="20">20</Option>
          <Option value="30">30</Option>
          <Option value="40">40</Option>
        </Select>
      </Col>
    );
  }
}

export default DropdownSelect;
