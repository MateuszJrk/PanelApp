import React from "react";
import { connect } from "react-redux";
import { changePageSize } from "../../../redux/actions/dataActions";

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

class DropdownSelect extends React.Component {
  render() {
    return (
      <Col xs="6" xl className="mb-2 ml-2">
        <Select
          value={this.props.pageSize}
          onChange={e => {
            console.log(this.props.pageSize);
            return this.props.changePageSize(e.target.value);
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

const mapStateToProps = state => {
  console.log(state);
  return {
    pageSize: state.getData.pageSize
  };
};

//
export default connect(
  mapStateToProps,
  { changePageSize }
)(DropdownSelect);
