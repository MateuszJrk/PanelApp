import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import styled from "styled-components";

const Div = styled.div`
  float: right;
  margin-right: 40px;
  @media screen and (max-width: 40em) {
    margin-left: 100px;
  }
`;

class PaginationMenu extends React.Component {
  render() {
    return (
      <Div xs="6">
        <Pagination aria-label="Page navigation example">
          <PaginationItem disabled>
            <PaginationLink previous href="#" />
          </PaginationItem>
          <PaginationItem active>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">4</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">5</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink next href="#" />
          </PaginationItem>
        </Pagination>
      </Div>
    );
  }
}
export default PaginationMenu;
