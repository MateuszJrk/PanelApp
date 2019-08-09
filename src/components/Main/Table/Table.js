import React, { Component } from "react";
import getData from "../../Data";
import { connect } from "react-redux";
import { getDataa } from "../../../redux/actions/dataActions";

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
import Pagination from "../Pagination/Pagination";
import Calendar from "./Calendar";
import Filters from "./Filters";
import Dropdown from "./Dropdown";
import styled from "styled-components";
import { Table, Thead, Tbody } from "react-super-responsive-table";
import "./SuperResponsiveTableStyl.css";
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
    currentPage: 1,
    pageSize: { value: 6 },
    pageOfItems: [],
    search: ""
  };

  componentDidMount() {
    // getDataa();
    // this.setState({ data: getData() });
    
     this.props.getDataa()
    
    
    
  }

  handleFilterSelectAll = () => {
    // this.setState({ data: getData() });
     this.props.getDataa()
     console.log(this.props.getData);
    
  };

  handleSearch = query => {
    this.setState({ search: query, selectedGenre: null, currentPage: 1 });
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

  handleSelect = e => {
    console.log(e);
    this.setState({ pageSize: { value: e.target.value } });
    console.log(this.state.pageSize.value);
  };

  render() {
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
              {this.state.pageOfItems.map(data => (
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
          <Row className="mt-4 ">
            <Dropdown
              pageSize={this.state.pageSize}
              onChange={this.handleSelect}
            />
            <Pagination
              items={this.state.data}
              onChangePage={this.onChangePage}
              pageSize={this.state.pageSize}
            />
          </Row>
        </Card>
      </TableDiv>
    );
  }
}
// export default PaginationTable;

// const mapStateToProps = state => {
//   return {

//       ctr: state.ctr.counter,
//       storedResults: state.res.results
//   }
// };

// const mapDispatchToProps = dispatch => {
//   return {
//       onIncrementCounter: () => dispatch(actionCreators.increment()),
//       onDecrementCounter: () => dispatch(actionCreators.decrement()),
//       onAddCounter: () => dispatch(actionCreators.add(10)),
//       onSubtractCounter: () => dispatch(actionCreators.subtract(15)),
//       onStoreResult: (result) => dispatch(actionCreators.storeResult(result)),
//       onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id))
//   }
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

const mapStateToProps = state => {
  console.log(state.getData.data)
  return { getData: state.getData.data };
};

export default connect( mapStateToProps, {getDataa})(PaginationTable);

// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { fetchPosts } from "../actions";
// import UserHeader from "./UserHeader";

// class PostList extends Component {
//   componentDidMount() {
//     this.props.fetchPosts();
//   }

//   renderList() {
//     return this.props.post.map(post => {
//       return (
//         <div key={post.id}>
//           <h2>{post.title}</h2>
//           <div>
//             <UserHeader userId={post.userId} />
//           </div>
//           <p>{post.body}</p>
//         </div>
//       );
//     });
//   }

//   render() {
//     return (
//       <ul>
//         <li>{this.renderList()}</li>
//       </ul>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return { post: state.post };
// };

// export default connect(
//   mapStateToProps,
//   { fetchPosts }
// )(PostList);
