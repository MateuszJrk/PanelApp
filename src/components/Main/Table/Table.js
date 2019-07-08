import React, { Component } from "react";
import getData from "../../Data";

import {
  Card,
  CardHeader,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
  Badge,
  Row
} from "reactstrap";
import { MoreHorizontal } from "react-feather";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLongArrowAltUp,
  faLongArrowAltDown
} from "@fortawesome/free-solid-svg-icons";
import Dropdown from "./Dropdown";
import Pagination from "./Pagination";
import Calendar from "./Calendar";
import Filters from "./Filters";
import styled from "styled-components";
import { Table, Thead, Tbody } from "react-super-responsive-table";
import "./SuperResponsiveTableStyl.css";
import { paginate } from "../../../services/paginate";
import _ from "lodash";

const Ths = styled.th`
  text-align: center;
`;
const Tds = styled.td`
  text-align: center;

  @media screen and (max-width: 40em) {
    border-bottom: 1px solid #d5d9e0;
  }
`;

const TableDiv = styled.div`
  font-family: "Nunito Sans", -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Helvetica Neue", Arial, sans-serif;
  background-color: white;
`;
const Tr = styled.tr`
  border-bottom: 1px solid #d5d9e0;
  border-top: 1px solid #d5d9e0;
`;

class PaginationTable extends Component {
  state = {
    data: [],
    sortColumn: { path: "title", order: "asc" },
    pageSize: { value: 2 },
    currentPage: 1
  };

  componentDidMount() {
    this.setState({ data: getData() });
  }

  handleFilterSelectAll = () => {
    this.setState({ data: getData() });
  };

  handleFilterSelect = () => {
    const newData = this.state.data.filter(dat => {
      return dat.isFiltered ? dat : null;
    });
    this.setState({
      data: [...newData]
    });
  };

  handleSort = path => {
    const sortColumn = { ...this.state.sortColumn };

    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }

    let sort = { ...this.state.data };

    sort = _.orderBy(sort, sortColumn.path, sortColumn.order);

    this.setState({ sortColumn, data: sort });
  };
  renderSortIconName = path => {
    if (this.state.sortColumn.order === "asc" && path === "name")
      return (
        <>
          <FontAwesomeIcon
            icon={faLongArrowAltUp}
            className=" text-muted"
            style={{ opacity: 0.4 }}
          />
          <FontAwesomeIcon icon={faLongArrowAltDown} className="  text-muted" />
        </>
      );
    else {
      return (
        <>
          <FontAwesomeIcon icon={faLongArrowAltUp} className=" text-muted" />
          <FontAwesomeIcon
            style={{ opacity: 0.4 }}
            icon={faLongArrowAltDown}
            className="  text-muted"
          />
        </>
      );
    }
  };
  renderSortIconSize = path => {
    if (this.state.sortColumn.order === "asc" && path === "size")
      return (
        <>
          <FontAwesomeIcon
            icon={faLongArrowAltUp}
            className=" text-muted"
            style={{ opacity: 0.4 }}
          />
          <FontAwesomeIcon icon={faLongArrowAltDown} className="  text-muted" />
        </>
      );
    else {
      return (
        <>
          <FontAwesomeIcon icon={faLongArrowAltUp} className=" text-muted" />
          <FontAwesomeIcon
            style={{ opacity: 0.4 }}
            icon={faLongArrowAltDown}
            className="  text-muted"
          />
        </>
      );
    }
  };
  renderSortIconDate = path => {
    if (this.state.sortColumn.order === "asc" && path === "date")
      return (
        <>
          <FontAwesomeIcon
            icon={faLongArrowAltUp}
            className=" text-muted"
            style={{ opacity: 0.4 }}
          />
          <FontAwesomeIcon icon={faLongArrowAltDown} className="  text-muted" />
        </>
      );
    else {
      return (
        <>
          <FontAwesomeIcon icon={faLongArrowAltUp} className=" text-muted" />
          <FontAwesomeIcon
            style={{ opacity: 0.4 }}
            icon={faLongArrowAltDown}
            className="  text-muted"
          />
        </>
      );
    }
  };
  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleTest = e => {
    console.log(e);
  };

  handleSelect = e => {
    this.setState({ pageSize: { value: e.target.value } });
  };

  handleNextPage = currPage => {
    this.setState({ currentPage: currPage + 1 });
  };
  handlePrevPage = currPage => {
    this.setState({ currentPage: currPage - 1 });
  };

  render() {
    const { length } = this.state.data;
    const { pageSize, currentPage, data } = this.state;

    const pagination = paginate(data, currentPage, pageSize.value);

    return (
      <TableDiv>
        <Row>
          <Calendar />

          <Filters
            onFilterSelect={this.handleFilterSelect}
            onFilterSelectAll={this.handleFilterSelectAll}
          />
        </Row>

        <Card className="flex-fill w-100  ">
          <CardHeader className="border-0">
            <div className="card-actions float-right ">
              <UncontrolledDropdown>
                <DropdownToggle tag="a">
                  <MoreHorizontal />
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Compose</DropdownItem>
                  <DropdownItem>Combine</DropdownItem>
                  <DropdownItem>Delete</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
          </CardHeader>

          <Table>
            <Thead>
              <Tr className="border-0">
                <Ths>Type</Ths>
                <Ths
                  onClick={() => {
                    this.handleSort("name");
                  }}
                >
                  Name {this.renderSortIconName("name")}
                </Ths>
                <Ths
                  onClick={() => {
                    this.handleSort("date");
                  }}
                >
                  Date {this.renderSortIconDate("date")}
                </Ths>
                <Ths
                  onClick={() => {
                    this.handleSort("size");
                  }}
                >
                  Size {this.renderSortIconSize("size")}
                </Ths>
                <Ths>Status</Ths>
                <Ths>Result</Ths>
                <Ths>Thumbnail</Ths>
                <Ths>Preview</Ths>
                <Ths>Logs</Ths>
              </Tr>
            </Thead>
            <Tbody>
              {pagination.map(data => (
                <Tr key={data._id} className="py-4">
                  <Tds>
                    <h4>
                      <Badge color={data.type === "2D" ? "primary" : "warning"}>
                        {data.type}
                      </Badge>
                    </h4>
                  </Tds>
                  <Tds className="py-2">
                    <small>
                      <p className="p-2 m-0">{data.name}</p>
                    </small>
                  </Tds>

                  <Tds className="py-2">{data.date}</Tds>
                  <Tds className="py-2">{data.size}</Tds>
                  <Tds className="py-2">{data.status}</Tds>
                  <Tds className="py-2">{data.result}</Tds>
                  <Tds className="py-2"> {data.thumbnail}</Tds>
                  <Tds className="py-2">{data.preview}</Tds>
                  <Tds className="py-2">{data.logs}</Tds>
                  <Tds className="py-2 ">{data.action}</Tds>
                </Tr>
              ))}
            </Tbody>
          </Table>
          <Row className="mt-4">
            <Dropdown
              pageSize={this.state.pageSize}
              onChange={this.handleSelect}
            />
            <Pagination
              nextPage={this.handleNextPage}
              prevPage={this.handlePrevPage}
              itemsCount={length}
              pageSize={pageSize}
              onPageChange={this.handlePageChange}
              currentPage={currentPage}
            />
          </Row>
        </Card>
      </TableDiv>
    );
  }
}
export default PaginationTable;
