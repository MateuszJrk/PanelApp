import React from "react";
import { connect } from "react-redux";

import styled from "styled-components";
import { PaginationItem, PaginationLink } from "reactstrap";
import PropTypes from "prop-types";

const propTypes = {
  onChangePage: PropTypes.func.isRequired,
  initialPage: PropTypes.number
};

const defaultProps = {
  initialPage: 1,
  pageSize: 10
};

class PaginationMenu extends React.Component {
  state = { pager: {}, currentPage: 1 };

  componentDidMount() {
    // set page if items array isn't empty
    if (this.props.data && this.props.data.length) {
      this.setPage(this.props.initialPage);
    }
  }

  componentDidUpdate(prevProps) {
    // reset page if items array has changed
    if (
      this.props.data !== prevProps.data ||
      this.props.pageSize !== prevProps.pageSize
    ) {
      this.setPage(this.props.initialPage);
    }
  }

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleNextPage = currPage => {
    this.setState({ currentPage: currPage + 1 });
  };
  handlePrevPage = currPage => {
    this.setState({ currentPage: currPage - 1 });
  };
  onChangePage = pageOfItems => {
    //   update state with new page of items
    this.setState({ pageOfItems });
  };

  setPage(page) {
    const items = this.props.data;

    let pager = this.state.pager;

    if (page < 1 || page > pager.totalPages) {
      return;
    }

    // get new pager object for specified page
    pager = this.getPager(items.length, page);

    // get new page of items from items array
    const pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);

    // update state
    this.setState({ pager });
    // call change page function in parent component
    this.props.onChangePage(pageOfItems);
  }

  getPager = (totalItems, currentPage, pageSize) => {
    // default to first page
    currentPage = currentPage || 1;

    // default page size

    pageSize = this.props.pageSize.value;

    // calculate total pages
    const totalPages = Math.ceil(totalItems / pageSize);

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
      <Pag
        aria-label="Page navigation example"
        className="list-inline d-flex justify-content-around"
      >
        <PaginationItem className={pager.currentPage === 1 ? "disabled" : ""}>
          <PaginationLink onClick={() => this.setPage(1)}>First</PaginationLink>
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
    );
  }
}

PaginationMenu.propTypes = propTypes;
PaginationMenu.defaultProps = defaultProps;

const mapStateToProps = state => {
  return {
    data: state.data.data
  };
};

export default connect(mapStateToProps)(PaginationMenu);
