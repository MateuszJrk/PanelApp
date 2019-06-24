import React from "react";
import ReactTooltip from "react-tooltip";
import { CustomInput, Badge, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faFolderOpen,
  faCheckCircle,
  faEye,
  faCube,
  faSortAlphaDown,
  faPen,
  faLayerGroup,
  faMagic,
  faUpload
} from "@fortawesome/free-solid-svg-icons";
import Dropdown from "./Dropdown";
import Pagination from "./Pagination";
import styled from "styled-components";
import { Table, Thead, Tbody } from "react-super-responsive-table";
import "./SuperResponsiveTableStyl.css";

const ImgTable = styled.img`
  width: 90px;
  height: 60px;
`;

const ImgModal = styled.img`
  width: 100%;
  height: 400px;
`;
const Ths = styled.th`
  text-align: center;
`;
const Tds = styled.td`
  text-align: center;

  @media screen and (max-width: 40em) {
    border-bottom: 1px solid #d5d9e0;
  }
`;
const Ul = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style-type: none;
  padding: 0px;
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
const Button = styled.button`
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

const PaginationTable = () => {
  return (
    <TableDiv>
      <Table className="mt-4 ">
        <Thead>
          <Tr>
            <Ths>Type</Ths>
            <Ths>Name</Ths>
            <Ths>Date</Ths>
            <Ths>Size</Ths>
            <Ths>Status</Ths>
            <Ths>Result</Ths>
            <Ths>Thumbnail</Ths>
            <Ths>Preview</Ths>
            <Ths>Logs</Ths>
            <Ths>
              {" "}
              <CustomInput
                type="select"
                id="exampleCustomSelect"
                name="customSelect "
                className="text-muted"
              >
                <option>...</option>
                <option>Compose</option>
                <option>Combine</option>
                <option>Delete</option>
              </CustomInput>
            </Ths>
          </Tr>
        </Thead>
        <Tbody>
          <Tr className="py-4">
            <Tds>
              <h4>
                <Badge color="primary" className=" ml-1">
                  2D
                </Badge>
              </h4>
            </Tds>
            <Tds className="py-2">
              <small>
                <p className="p-2 m-0">
                  Cernell_small_new_V5_corona_884599_cam2.zip
                </p>
              </small>
            </Tds>

            <Tds className="py-2">2011/04/25</Tds>
            <Tds className="py-2">0 MB</Tds>
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
                  <ReactTooltip id="unzip" aria-haspopup="true" role="tooltip">
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
                  <ReactTooltip id="upload" aria-haspopup="true" role="tooltip">
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
              {" "}
              <ul className="list-inline d-flex justify-content-around m-0 p-0s">
                <li>
                  <ImgTable
                    src="https://www.imgacademy.com/sites/default/files/legacy-hotel-rendering-guest-room.jpg"
                    alt="room"
                    type="button"
                    className="cursor-pointer"
                    data-toggle="modal"
                    data-target="#exampleModal"
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
                  <Button
                    className="btn py-0 px-1 "
                    type="button"
                    id="button-addon2"
                  >
                    <FontAwesomeIcon icon={faEye} />
                    <span className="ml-1">50</span>
                  </Button>
                </li>
              </ul>
            </Tds>
            <Tds className="py-2">
              <Ul className=" m-0">
                <Button>
                  <FontAwesomeIcon
                    icon={faSortAlphaDown}
                    className="cursor-pointer"
                  />
                </Button>
                <Button>
                  <FontAwesomeIcon icon={faCube} className="cursor-pointer" />
                </Button>
              </Ul>
            </Tds>
            <Tds className="py-2">
              <Ul className=" m-0 pt-1">
                <div>
                  <input type="checkbox" />
                </div>

                <div>
                  <Button>
                    <FontAwesomeIcon icon={faLayerGroup} />
                  </Button>
                </div>
                <div>
                  <Button>
                    <FontAwesomeIcon icon={faPen} />
                  </Button>
                </div>
              </Ul>
            </Tds>
          </Tr>
        </Tbody>
      </Table>
      <Row className="mt-4">
        <Dropdown />
        <Pagination />
      </Row>
    </TableDiv>
  );
};
export default PaginationTable;
