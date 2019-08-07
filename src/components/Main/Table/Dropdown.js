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
    font-size: 20px;
  }
`;

const Option = styled.option`
  background: white;
  color: black;
`;

const DropdownSelect = props => {
  const { onChange, pageSize } = props;

  return (
    <Col xs="6" xl className="mb-2 ml-2">
      <Select value={pageSize.value} onChange={e => onChange(e)}>
        <Option value="6">6</Option>
        <Option value="20">20</Option>
        <Option value="30">30</Option>
        <Option value="40">40</Option>
      </Select>
    </Col>
  );
};

export default DropdownSelect;
