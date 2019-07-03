import React from "react";

import styled from "styled-components";

const Input = styled.input`
  width: 13%;
  height: 13%;

  border: 1px solid #d5d9e0;
  text-align: center;
  margin-top: 21px;
  margin-bottom: 21px;
  margin-left: 15px;
  @media screen and (max-width: 40em) {
    width: 30%;
  }
`;

class Calendar extends React.Component {
  render() {
    return (
      <Input
        data-date-format="dd/mm/yyyy"
        id="datepicker"
        placeholder="dd/mm/yyyy"
      />
    );
  }
}

export default Calendar;
