import React, { Component } from "react";

import { connect } from "react-redux";
import {
  fetchData,
  sortData,
  deleteData,
  changeCheckbox
} from "../../../redux/actions/dataActions";

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
  faLongArrowAltDown,
  faPen,
  faLayerGroup
} from "@fortawesome/free-solid-svg-icons";

import Pagination from "../Pagination/Pagination";
import Calendar from "./Calendar";
import Filters from "./Filters";
import Dropdown from "./Dropdown";
import styled from "styled-components";
import { Table, Thead, Tbody } from "react-super-responsive-table";
import "./SuperResponsiveTableStyl.css";

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
const Ul = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style-type: none;
  padding: 0px;
`;
const ButtonTable = styled.button`
  cursor: pointer;
  background: #495057;
  font-size: 14px;
  border-radius: 3px;
  color: white;
  border: 2px solid #495057;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: #000000;
    color: white;
  }
  @media screen and (max-width: 40em) {
    font-size: 20px;
  }
`;

class PaginationTable extends Component {
  state = {
    pageOfItems: [],
    pageSize: { value: 3 },
    isChecked: true
  };

  componentDidMount() {
    this.props.fetchData();
  }

  onChangePage = pageOfItems => {
    //   update state with new page of items
    console.log(this.props.getData);
    this.setState({ pageOfItems });
  };
  handleSelect = e => {
    this.setState({ pageSize: { value: e.target.value } });
  };
  changeCheckbox = id => {
    console.log(this.state.isChecked, id.target.id);
    this.setState({ isChecked: !this.state.isChecked });
  };

  render() {
    return (
      <TableDiv>
        <Row>
          <Calendar />
          <Filters />
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
                  <DropdownItem onClick={() => this.props.deleteData()}>
                    Delete
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
          </CardHeader>

          <Table>
            <Thead>
              <Tr className="border-0">
                <Ths>Type</Ths>
                <Ths
                  name="Name"
                  onClick={() => this.props.sortData("name")}
                  className="cursor-pointer"
                >
                  Name
                  <FontAwesomeIcon
                    icon={faLongArrowAltUp}
                    className=" text-muted"
                  />
                  <FontAwesomeIcon
                    icon={faLongArrowAltDown}
                    className=" text-muted"
                  />
                </Ths>
                <Ths
                  onClick={() => this.props.sortData("date")}
                  className="cursor-pointer"
                >
                  Date
                  <FontAwesomeIcon
                    icon={faLongArrowAltUp}
                    className=" text-muted"
                  />
                  <FontAwesomeIcon
                    icon={faLongArrowAltDown}
                    className=" text-muted"
                  />
                </Ths>
                <Ths
                  onClick={() => this.props.sortData("size")}
                  className="cursor-pointer"
                >
                  Size
                  <FontAwesomeIcon
                    icon={faLongArrowAltUp}
                    className=" text-muted"
                  />
                  <FontAwesomeIcon
                    icon={faLongArrowAltDown}
                    className=" text-muted"
                  />
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
                  <Tds className="py-2 ">
                    <Ul className=" m-0 pt-1">
                      <div>
                        <input
                          type="checkbox"
                          id={data._id}
                          value={this.state.isChecked}
                          onChange={this.changeCheckbox}
                        />
                      </div>

                      <div>
                        <ButtonTable>
                          <FontAwesomeIcon icon={faLayerGroup} />
                        </ButtonTable>
                      </div>
                      <div>
                        <ButtonTable>
                          <FontAwesomeIcon icon={faPen} />
                        </ButtonTable>
                      </div>
                    </Ul>
                  </Tds>
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
              onChangePage={this.onChangePage}
              pageSize={this.state.pageSize}
            />
          </Row>
        </Card>
      </TableDiv>
    );
  }
}

const mapStateToProps = state => {
  return {
    getData: state.getData.data,
    isChecked: state.getData.isChecked
  };
};

export default connect(
  mapStateToProps,
  { fetchData, sortData, deleteData, changeCheckbox }
)(PaginationTable);
