import React from "react";

import styled from "styled-components";

const Input = styled.input`
  width: 10%;
  height: 10%;
  border-radius: 10px;
  border: 1px solid gray;
  text-align: center;
  margin-top: 21px;
  margin-bottom: 21px;
  margin-left: 21px;
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
