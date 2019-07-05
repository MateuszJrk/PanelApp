// import React from "react";
// import {
//   Col,
//   Dropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem
// } from "reactstrap";

// class DropdownSelect extends React.Component {
//   state = {
//     dropdownOpen: false
//   };

//   toggle = () => {
//     this.setState(prevState => ({
//       dropdownOpen: !prevState.dropdownOpen
//     }));
//   };

//   render() {
//     return (
//       <Col xs="6" xl className="mb-2 ml-2">
//         <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
//           <DropdownToggle onChange={() => this.props.onTest()} caret>
//             1
//           </DropdownToggle>
//           <DropdownMenu>
//             <DropdownItem>2</DropdownItem>
//             <DropdownItem>3</DropdownItem>
//             <DropdownItem>4</DropdownItem>
//           </DropdownMenu>
//         </Dropdown>
//       </Col>
//     );
//   }
// }
// export default DropdownSelect;

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
  width: 50px;
  transition: 0.5s all ease-out;
  padding: 5px;
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
  justify-content: space-around;
`;

const DropdownSelect = props => {
  const { onChange, pageSize } = props;
  return (
    <Col xs="6" xl className="mb-2 ml-2">
      <Select value={pageSize.value} onChange={e => onChange(e)}>
        <Option className="bg-light color-primary" value="2">
          2
        </Option>
        <Option className="bg-light" value="3">
          3
        </Option>
        <Option className="bg-light" value="4">
          4
        </Option>
        <Option className="bg-light" value="5">
          5
        </Option>
      </Select>
    </Col>
  );
};

export default DropdownSelect;
