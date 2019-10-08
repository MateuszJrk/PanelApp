import React, { Component } from "react";

import { connect } from "react-redux";

import ReactTooltip from "react-tooltip";
import {
  fetchData,
  sortData,
  deleteData,
  onChange
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
  faLayerGroup,
  faArrowDown,
  faFolderOpen,
  faCheckCircle,
  faEye,
  faCube,
  faSortAlphaDown,
  faMagic,
  faUpload
} from "@fortawesome/free-solid-svg-icons";

import Pagination from "../Pagination/Pagination";
import Calendar from "./Calendar";
import Filters from "./Filters";
import Dropdown from "./Dropdown";
// import Checkbox from "./Checkbox";
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
const P = styled.p`
  margin: 0px;
`;
const ImgTable = styled.img`
  width: 90px;
  height: 60px;
`;
const ImgModal = styled.img`
  width: 100%;
  height: 400px;
`;

class PaginationTable extends Component {
  state = {
    pageOfItems: [],
    pageSize: { value: 10 }
  };

  componentDidMount() {
    this.props.fetchData();
  }

  onChangePage = pageOfItems => {
    //   update state with new page of items

    this.setState({ pageOfItems });
  };
  handleSelect = e => {
    this.setState({ pageSize: { value: e.target.value } });
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
                  <Tds className="py-2">
                    <Ul className="m-0">
                      <div>
                        <P data-tip data-for="download">
                          <FontAwesomeIcon
                            icon={faArrowDown}
                            className="cursor-pointer text-success"
                          />
                        </P>
                        <ReactTooltip
                          id="download"
                          aria-haspopup="true"
                          role="tooltip"
                        >
                          <p>Initiated: 20 May, 20:50:07</p>
                          <small>
                            <p>Download time: 00:01:57</p>
                          </small>
                        </ReactTooltip>
                      </div>

                      <div>
                        <P data-tip data-for="unzip">
                          <FontAwesomeIcon
                            icon={faFolderOpen}
                            className="cursor-pointer text-success"
                          />
                        </P>
                        <ReactTooltip
                          id="unzip"
                          aria-haspopup="true"
                          role="tooltip"
                        >
                          <p>Unzip Time: 00:00:10</p>
                        </ReactTooltip>
                      </div>

                      <div>
                        <P data-tip data-for="compose">
                          <FontAwesomeIcon
                            icon={faMagic}
                            className="cursor-pointer text-success"
                          />
                        </P>
                        <ReactTooltip
                          id="compose"
                          aria-haspopup="true"
                          role="tooltip"
                        >
                          <p>Compose Time: 00:00:00</p>
                        </ReactTooltip>
                      </div>
                      <div>
                        <P data-tip data-for="upload">
                          <FontAwesomeIcon
                            icon={faUpload}
                            className="cursor-pointer text-success"
                          />
                        </P>
                        <ReactTooltip
                          id="upload"
                          aria-haspopup="true"
                          role="tooltip"
                        >
                          <p>Upload Time: 00:00:01</p>
                        </ReactTooltip>
                      </div>
                    </Ul>
                  </Tds>
                  <Tds className="py-2">
                    <ul className="list-inline d-flex justify-content-around m-0">
                      <li>
                        <div>
                          <FontAwesomeIcon
                            icon={faCheckCircle}
                            className="text-success"
                          />
                        </div>
                      </li>
                    </ul>
                  </Tds>
                  <Tds className="py-2">
                    <ul className="list-inline d-flex justify-content-around m-0 p-0s">
                      <li>
                        <ImgTable
                          src="https://www.imgacademy.com/sites/default/files/legacy-hotel-rendering-guest-room.jpg"
                          alt="room"
                          type="button"
                          className="cursor-pointer"
                          data-toggle="modal"
                          data-target="#exampleModal"
                          SameSite="None"
                        />
                        <div
                          className="modal fade"
                          id="exampleModal"
                          tabIndex="-1"
                          role="dialog"
                          aria-labelledby="exampleModalLabel"
                          aria-hidden="true"
                        >
                          <div
                            className="modal-dialog modal-dialog-centered"
                            role="document"
                          >
                            <div className="modal-content">
                              <ImgModal
                                src="https://www.imgacademy.com/sites/default/files/legacy-hotel-rendering-guest-room.jpg"
                                alt="room"
                                SameSite="None"
                              />
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </Tds>
                  <Tds className="py-2">
                    <ul className="list-inline d-flex justify-content-around m-0 p-0s">
                      <li>
                        <ButtonTable
                          className="btn py-0 px-1 "
                          type="button"
                          id="button-addon2"
                        >
                          <FontAwesomeIcon icon={faEye} />
                          <span className="">50</span>
                        </ButtonTable>
                      </li>
                    </ul>
                  </Tds>
                  <Tds className="py-2">
                    <Ul className=" m-0">
                      <ButtonTable>
                        <FontAwesomeIcon
                          icon={faSortAlphaDown}
                          className="cursor-pointer"
                        />
                      </ButtonTable>
                      <ButtonTable>
                        <FontAwesomeIcon
                          icon={faCube}
                          className="cursor-pointer"
                        />
                      </ButtonTable>
                    </Ul>
                  </Tds>
                  <Tds className="py-2 ">
                    <Ul className=" m-0 pt-1">
                      <div>
                        <label key={data._id}>
                          <input
                            type="checkbox"
                            value={this.props.value}
                            onChange={e => {
                              this.props.onChange(e.target.value, data._id);
                            }}
                          />
                          {/* <Checkbox input={data} /> */}
                        </label>
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
  return { value: state.data.value };
};

export default connect(
  mapStateToProps,
  { fetchData, sortData, deleteData, onChange }
)(PaginationTable);
