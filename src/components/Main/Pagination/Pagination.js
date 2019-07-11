/* Pagination Component 
-------------------------------------------------*/
import React from "react";
import styled from "styled-components";
import { Row, PaginationItem, PaginationLink } from "reactstrap";
import Dropdown from "./Dropdown";
// const propTypes = {
//     items: React.PropTypes.array.isRequired,
//   onChangePage: React.PropTypes.func.isRequired,
//   initialPage: React.PropTypes.number
// };

// const defaultProps = {
//   initialPage: 1
// };

export default class PaginationMenu extends React.Component {
  state = { pager: {}, pageSize: { value: 4 } };

  componentWillMount() {
    // set page if items array isn't empty
    if (this.props.items && this.props.items.length) {
      this.setPage(this.props.initialPage);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // reset page if items array has changed
    if (this.props.items !== prevProps.items) {
      this.setPage(this.props.initialPage);
    }
  }

  setPage(page) {
    const items = this.props.items;

    let pager = this.state.pager;

    if (page < 1 || page > pager.totalPages) {
      return;
    }

    // get new pager object for specified page
    pager = this.getPager(items.length, page);
    console.log(pager);

    // get new page of items from items array
    const pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);
    console.log(pageOfItems);

    // update state
    this.setState({ pager: pager });

    // call change page function in parent component
    this.props.onChangePage(pageOfItems);
  }

  getPager = (totalItems, currentPage, pageSize) => {
    // default to first page
    currentPage = currentPage || 1;

    // default page size
    pageSize = this.state.pageSize.value;
    console.log(pageSize);

    // calculate total pages
    const totalPages = Math.ceil(totalItems / pageSize);
    console.log(totalPages);

    let startPage, endPage;
    if (totalPages <= 5) {
      // less than 10 total pages so show all
      startPage = 1;
      endPage = totalPages;
    } else {
      // more than 10 total pages so calculate start and end pages
      if (currentPage <= 3) {
        startPage = 1;
        endPage = 5;
      } else if (currentPage + 2 >= totalPages) {
        startPage = totalPages - 4;
        endPage = totalPages;
      } else {
        startPage = currentPage - 2;
        endPage = currentPage + 2;
      }
    }

    // calculate start and end item indexes
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    // create an array of pages to ng-repeat in the pager control
    const pages = [...Array(endPage + 1 - startPage).keys()].map(
      i => startPage + i
    );

    // return object with all pager properties required by the view
    return {
      totalItems,
      currentPage,
      pageSize,
      totalPages,
      startPage,
      endPage,
      startIndex,
      endIndex,
      pages
    };
  };

  handleSelect = e => {
    console.log(e);
    this.setState({ pageSize: { value: e.target.value } });
  };

  render() {
    const pager = this.state.pager;

    const Pag = styled.div`
      margin-right: 25px;
      @media screen and (max-width: 40em) {
        margin-left: 15px;
      }
    `;

    if (!pager.pages || pager.pages.length <= 1) {
      // don't display pager if there is only 1 page
      return null;
    }

    return (
      <Row className="mt-4 ">
        <Dropdown
          pageSize={this.state.pageSize}
          handleSelect={this.handleSelect}
        />
        <Pag
          aria-label="Page navigation example"
          className="list-inline d-flex justify-content-around"
        >
          <PaginationItem className={pager.currentPage === 1 ? "disabled" : ""}>
            <PaginationLink onClick={() => this.setPage(1)}>
              First
            </PaginationLink>
          </PaginationItem>
          <PaginationItem className={pager.currentPage === 1 ? "disabled" : ""}>
            <PaginationLink
              previous
              onClick={() => this.setPage(pager.currentPage - 1)}
            />
          </PaginationItem>
          {pager.pages.map((page, index) => (
            <PaginationItem
              key={index}
              className={pager.currentPage === page ? "active" : ""}
            >
              <PaginationLink onClick={() => this.setPage(page)}>
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem
            className={pager.currentPage === pager.totalPages ? "disabled" : ""}
          >
            <PaginationLink
              next
              onClick={() => this.setPage(pager.currentPage + 1)}
            />
          </PaginationItem>
          <PaginationItem
            className={pager.currentPage === pager.totalPages ? "disabled" : ""}
          >
            <PaginationLink onClick={() => this.setPage(pager.totalPages)}>
              Last
            </PaginationLink>
          </PaginationItem>
        </Pag>
      </Row>
    );
  }
}
