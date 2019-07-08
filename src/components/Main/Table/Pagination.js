import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import styled from "styled-components";
import _ from "lodash";

const Div = styled.div`
  float: right;
  margin-right: 40px;
  @media screen and (max-width: 40em) {
    margin-left: 100px;
  }
`;

class PaginationMenu extends React.Component {
  render() {
    const {
      itemsCount,
      pageSize,
      currentPage,
      onPageChange,
      prevPage,
      nextPage
    } = this.props;
    console.log(currentPage);
    const pagesCount = Math.ceil(itemsCount / pageSize.value);
    if (pagesCount <= 1) return null;
    const pages = _.range(1, pagesCount + 1);

    return (
      <Div xs="6">
        <Pagination aria-label="Page navigation example">
          <PaginationItem
            className={
              pages[0] === currentPage ? "page-item disabled" : "page-item"
            }
          >
            <PaginationLink
              previous
              href="#"
              onClick={() => prevPage(currentPage)}
            />
          </PaginationItem>
          {pages.map(page => (
            <PaginationItem
              key={page}
              className={
                currentPage === page ? "page-item active" : "page-item"
              }
            >
              <PaginationLink onClick={() => onPageChange(page)}>
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem
            className={
              pages.length === currentPage ? "page-item disabled" : "page-item"
            }
          >
            <PaginationLink
              next
              href="#"
              onClick={() => nextPage(currentPage)}
            />
          </PaginationItem>
        </Pagination>
      </Div>
    );
  }
}
export default PaginationMenu;
