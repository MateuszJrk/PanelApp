import React from "react";
import ReactTooltip from "react-tooltip";
import { CustomInput, Button } from "reactstrap";
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
import styled from "styled-components";
import { Table, Thead, Tbody, Tr } from "react-super-responsive-table";
import "./SuperResponsiveTableStyle.css";

const SpanWidth = styled.span`
  width: 20px;
`;

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
`;
const Ul = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style-type: none;
  padding: 0px;
`;

const PaginationTable = () => {
  return (
    <Table border="true" className="mt-4">
      <Thead>
        <Tr>
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
              <option value="">actions</option>
              <option>One</option>
              <option>Two</option>
              <option>Three</option>
            </CustomInput>
          </Ths>
        </Tr>
      </Thead>
      <Tbody>
        <Tr className="py-4">
          <Tds className="py-2">
            {" "}
            <div>
              <small>
                <SpanWidth className="border bg-light nav-link p-0 m-0">
                  2D
                </SpanWidth>

                <p className="p-2 m-0">
                  Cernell_small_new_V5_corona_884599_cam2.zip
                </p>
              </small>
            </div>
          </Tds>

          <Tds className="py-2">2011/04/25</Tds>
          <Tds className="py-2">0 MB</Tds>
          <Tds className="py-2">
            <Ul className="m-0">
              <div>
                <a href="/ " data-tip data-for="download">
                  <FontAwesomeIcon
                    icon={faArrowDown}
                    className="cursor-pointer text-success"
                  />
                </a>
                <ReactTooltip id="download" aria-haspopup="true" role="tooltip">
                  <p>Initiated: 20 May, 20:50:07</p>
                  <small>
                    <p>Download time: 00:01:57</p>
                  </small>
                </ReactTooltip>
              </div>

              <div>
                <a href="/ " data-tip data-for="unzip">
                  <FontAwesomeIcon
                    icon={faFolderOpen}
                    className="cursor-pointer text-success"
                  />
                </a>
                <ReactTooltip id="unzip" aria-haspopup="true" role="tooltip">
                  <p>Unzip Time: 00:00:10</p>
                </ReactTooltip>
              </div>

              <div>
                <a href="/ " data-tip data-for="compose">
                  <FontAwesomeIcon
                    icon={faMagic}
                    className="cursor-pointer text-success"
                  />
                </a>
                <ReactTooltip id="compose" aria-haspopup="true" role="tooltip">
                  <p>Compose Time: 00:00:00</p>
                </ReactTooltip>
              </div>
              <div>
                <a href="/ " data-tip data-for="upload">
                  <FontAwesomeIcon
                    icon={faUpload}
                    className="cursor-pointer text-success"
                  />
                </a>
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
              <div>
                <FontAwesomeIcon
                  icon={faSortAlphaDown}
                  className="cursor-pointer"
                />
              </div>
              <div>
                <FontAwesomeIcon icon={faCube} className="cursor-pointer" />
              </div>
            </Ul>
          </Tds>
          <Tds className="py-2">
            <Ul className=" m-0">
              <div>
                <CustomInput
                  type="checkbox"
                  id="exampleCustomCheckbox"
                  className="mb-2 "
                />
              </div>

              <div>
                <Button className="btn py-0 px-1 mb-1" type="button">
                  <FontAwesomeIcon icon={faLayerGroup} />
                </Button>
              </div>
              <div>
                <Button className="btn py-0 px-1 " type="button">
                  <FontAwesomeIcon icon={faPen} />
                </Button>
              </div>
            </Ul>
          </Tds>
        </Tr>
        <Tr className="py-4">
          <Tds className="py-2">
            {" "}
            <div>
              <small>
                <SpanWidth className="border bg-light nav-link p-0 m-0">
                  2D
                </SpanWidth>

                <p className="p-2 m-0">
                  Cernell_small_new_V5_corona_884599_cam2.zip
                </p>
              </small>
            </div>
          </Tds>

          <Tds className="py-2">2011/04/25</Tds>
          <Tds className="py-2">0 MB</Tds>
          <Tds className="py-2">
            <Ul className="m-0">
              <div>
                <a href="/ " data-tip data-for="download">
                  <FontAwesomeIcon
                    icon={faArrowDown}
                    className="cursor-pointer text-success"
                  />
                </a>
                <ReactTooltip id="download" aria-haspopup="true" role="tooltip">
                  <p>Initiated: 20 May, 20:50:07</p>
                  <small>
                    <p>Download time: 00:01:57</p>
                  </small>
                </ReactTooltip>
              </div>

              <div>
                <a href="/ " data-tip data-for="unzip">
                  <FontAwesomeIcon
                    icon={faFolderOpen}
                    className="cursor-pointer text-success"
                  />
                </a>
                <ReactTooltip id="unzip" aria-haspopup="true" role="tooltip">
                  <p>Unzip Time: 00:00:10</p>
                </ReactTooltip>
              </div>

              <div>
                <a href="/ " data-tip data-for="compose">
                  <FontAwesomeIcon
                    icon={faMagic}
                    className="cursor-pointer text-success"
                  />
                </a>
                <ReactTooltip id="compose" aria-haspopup="true" role="tooltip">
                  <p>Compose Time: 00:00:00</p>
                </ReactTooltip>
              </div>
              <div>
                <a href="/ " data-tip data-for="upload">
                  <FontAwesomeIcon
                    icon={faUpload}
                    className="cursor-pointer text-success"
                  />
                </a>
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
              <div>
                <FontAwesomeIcon
                  icon={faSortAlphaDown}
                  className="cursor-pointer"
                />
              </div>
              <div>
                <FontAwesomeIcon icon={faCube} className="cursor-pointer" />
              </div>
            </Ul>
          </Tds>
          <Tds className="py-2">
            <Ul className=" m-0">
              <div>
                <CustomInput
                  type="checkbox"
                  id="exampleCustomCheckbox"
                  className="mb-2 "
                />
              </div>

              <div>
                <Button className="btn py-0 px-1 mb-1" type="button">
                  <FontAwesomeIcon icon={faLayerGroup} />
                </Button>
              </div>
              <div>
                <Button className="btn py-0 px-1 " type="button">
                  <FontAwesomeIcon icon={faPen} />
                </Button>
              </div>
            </Ul>
          </Tds>
        </Tr>
        <Tr className="py-4">
          <Tds className="py-2">
            {" "}
            <div>
              <small>
                <SpanWidth className="border bg-light nav-link p-0 m-0">
                  2D
                </SpanWidth>

                <p className="p-2 m-0">
                  Cernell_small_new_V5_corona_884599_cam2.zip
                </p>
              </small>
            </div>
          </Tds>

          <Tds className="py-2">2011/04/25</Tds>
          <Tds className="py-2">0 MB</Tds>
          <Tds className="py-2">
            <Ul className="m-0">
              <div>
                <a href="/ " data-tip data-for="download">
                  <FontAwesomeIcon
                    icon={faArrowDown}
                    className="cursor-pointer text-success"
                  />
                </a>
                <ReactTooltip id="download" aria-haspopup="true" role="tooltip">
                  <p>Initiated: 20 May, 20:50:07</p>
                  <small>
                    <p>Download time: 00:01:57</p>
                  </small>
                </ReactTooltip>
              </div>

              <div>
                <a href="/ " data-tip data-for="unzip">
                  <FontAwesomeIcon
                    icon={faFolderOpen}
                    className="cursor-pointer text-success"
                  />
                </a>
                <ReactTooltip id="unzip" aria-haspopup="true" role="tooltip">
                  <p>Unzip Time: 00:00:10</p>
                </ReactTooltip>
              </div>

              <div>
                <a href="/ " data-tip data-for="compose">
                  <FontAwesomeIcon
                    icon={faMagic}
                    className="cursor-pointer text-success"
                  />
                </a>
                <ReactTooltip id="compose" aria-haspopup="true" role="tooltip">
                  <p>Compose Time: 00:00:00</p>
                </ReactTooltip>
              </div>
              <div>
                <a href="/ " data-tip data-for="upload">
                  <FontAwesomeIcon
                    icon={faUpload}
                    className="cursor-pointer text-success"
                  />
                </a>
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
              <div>
                <FontAwesomeIcon
                  icon={faSortAlphaDown}
                  className="cursor-pointer"
                />
              </div>
              <div>
                <FontAwesomeIcon icon={faCube} className="cursor-pointer" />
              </div>
            </Ul>
          </Tds>
          <Tds className="py-2">
            <Ul className=" m-0">
              <div>
                <CustomInput
                  type="checkbox"
                  id="exampleCustomCheckbox"
                  className="mb-2 "
                />
              </div>

              <div>
                <Button className="btn py-0 px-1 mb-1" type="button">
                  <FontAwesomeIcon icon={faLayerGroup} />
                </Button>
              </div>
              <div>
                <Button className="btn py-0 px-1 " type="button">
                  <FontAwesomeIcon icon={faPen} />
                </Button>
              </div>
            </Ul>
          </Tds>
        </Tr>
        <Tr className="py-4">
          <Tds className="py-2">
            {" "}
            <div>
              <small>
                <SpanWidth className="border bg-light nav-link p-0 m-0">
                  2D
                </SpanWidth>

                <p className="p-2 m-0">
                  Cernell_small_new_V5_corona_884599_cam2.zip
                </p>
              </small>
            </div>
          </Tds>

          <Tds className="py-2">2011/04/25</Tds>
          <Tds className="py-2">0 MB</Tds>
          <Tds className="py-2">
            <Ul className="m-0">
              <div>
                <a href="/ " data-tip data-for="download">
                  <FontAwesomeIcon
                    icon={faArrowDown}
                    className="cursor-pointer text-success"
                  />
                </a>
                <ReactTooltip id="download" aria-haspopup="true" role="tooltip">
                  <p>Initiated: 20 May, 20:50:07</p>
                  <small>
                    <p>Download time: 00:01:57</p>
                  </small>
                </ReactTooltip>
              </div>

              <div>
                <a href="/ " data-tip data-for="unzip">
                  <FontAwesomeIcon
                    icon={faFolderOpen}
                    className="cursor-pointer text-success"
                  />
                </a>
                <ReactTooltip id="unzip" aria-haspopup="true" role="tooltip">
                  <p>Unzip Time: 00:00:10</p>
                </ReactTooltip>
              </div>

              <div>
                <a href="/ " data-tip data-for="compose">
                  <FontAwesomeIcon
                    icon={faMagic}
                    className="cursor-pointer text-success"
                  />
                </a>
                <ReactTooltip id="compose" aria-haspopup="true" role="tooltip">
                  <p>Compose Time: 00:00:00</p>
                </ReactTooltip>
              </div>
              <div>
                <a href="/ " data-tip data-for="upload">
                  <FontAwesomeIcon
                    icon={faUpload}
                    className="cursor-pointer text-success"
                  />
                </a>
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
              <div>
                <FontAwesomeIcon
                  icon={faSortAlphaDown}
                  className="cursor-pointer"
                />
              </div>
              <div>
                <FontAwesomeIcon icon={faCube} className="cursor-pointer" />
              </div>
            </Ul>
          </Tds>
          <Tds className="py-2">
            <Ul className=" m-0">
              <div>
                <CustomInput
                  type="checkbox"
                  id="exampleCustomCheckbox"
                  className="mb-2 "
                />
              </div>

              <div>
                <Button className="btn py-0 px-1 mb-1" type="button">
                  <FontAwesomeIcon icon={faLayerGroup} />
                </Button>
              </div>
              <div>
                <Button className="btn py-0 px-1 " type="button">
                  <FontAwesomeIcon icon={faPen} />
                </Button>
              </div>
            </Ul>
          </Tds>
        </Tr>
        <Tr className="py-4">
          <Tds className="py-2">
            {" "}
            <div>
              <small>
                <SpanWidth className="border bg-light nav-link p-0 m-0">
                  2D
                </SpanWidth>

                <p className="p-2 m-0">
                  Cernell_small_new_V5_corona_884599_cam2.zip
                </p>
              </small>
            </div>
          </Tds>

          <Tds className="py-2">2011/04/25</Tds>
          <Tds className="py-2">0 MB</Tds>
          <Tds className="py-2">
            <Ul className="m-0">
              <div>
                <a href="/ " data-tip data-for="download">
                  <FontAwesomeIcon
                    icon={faArrowDown}
                    className="cursor-pointer text-success"
                  />
                </a>
                <ReactTooltip id="download" aria-haspopup="true" role="tooltip">
                  <p>Initiated: 20 May, 20:50:07</p>
                  <small>
                    <p>Download time: 00:01:57</p>
                  </small>
                </ReactTooltip>
              </div>

              <div>
                <a href="/ " data-tip data-for="unzip">
                  <FontAwesomeIcon
                    icon={faFolderOpen}
                    className="cursor-pointer text-success"
                  />
                </a>
                <ReactTooltip id="unzip" aria-haspopup="true" role="tooltip">
                  <p>Unzip Time: 00:00:10</p>
                </ReactTooltip>
              </div>

              <div>
                <a href="/ " data-tip data-for="compose">
                  <FontAwesomeIcon
                    icon={faMagic}
                    className="cursor-pointer text-success"
                  />
                </a>
                <ReactTooltip id="compose" aria-haspopup="true" role="tooltip">
                  <p>Compose Time: 00:00:00</p>
                </ReactTooltip>
              </div>
              <div>
                <a href="/ " data-tip data-for="upload">
                  <FontAwesomeIcon
                    icon={faUpload}
                    className="cursor-pointer text-success"
                  />
                </a>
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
              <div>
                <FontAwesomeIcon
                  icon={faSortAlphaDown}
                  className="cursor-pointer"
                />
              </div>
              <div>
                <FontAwesomeIcon icon={faCube} className="cursor-pointer" />
              </div>
            </Ul>
          </Tds>
          <Tds className="py-2">
            <Ul className=" m-0">
              <div>
                <CustomInput
                  type="checkbox"
                  id="exampleCustomCheckbox"
                  className="mb-2 "
                />
              </div>

              <div>
                <Button className="btn py-0 px-1 mb-1" type="button">
                  <FontAwesomeIcon icon={faLayerGroup} />
                </Button>
              </div>
              <div>
                <Button className="btn py-0 px-1 " type="button">
                  <FontAwesomeIcon icon={faPen} />
                </Button>
              </div>
            </Ul>
          </Tds>
        </Tr>
      </Tbody>
    </Table>
  );
};
export default PaginationTable;
