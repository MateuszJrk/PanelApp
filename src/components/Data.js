import React from "react";

import styled from "styled-components";
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

import ReactTooltip from "react-tooltip";

const P = styled.p`
  margin: 0px;
`;
const Ul = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style-type: none;
  padding: 0px;
`;
const ImgTable = styled.img`
  width: 90px;
  height: 60px;
`;

const ImgModal = styled.img`
  width: 100%;
  height: 400px;
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

const Data = [
  {
    _id: "1",
    type: "360",
    name: "Cernell_small_new_V5_corona_884599_cam2.zip",
    date: "2011/04/25",
    size: "7 MB",
    status: (
      <Ul className="m-0">
        <div>
          <P data-tip data-for="download">
            <FontAwesomeIcon
              icon={faArrowDown}
              className="cursor-pointer text-success"
            />
          </P>
          <ReactTooltip id="download" aria-haspopup="true" role="tooltip">
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
          <ReactTooltip id="compose" aria-haspopup="true" role="tooltip">
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
    ),
    result: (
      <ul className="list-inline d-flex justify-content-around m-0">
        <li>
          <div>
            <FontAwesomeIcon icon={faCheckCircle} className="text-success" />
          </div>
        </li>
      </ul>
    ),
    thumbnail: (
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
            <div className="modal-dialog modal-dialog-centered" role="document">
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
    ),
    preview: (
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
    ),
    logs: (
      <Ul className=" m-0">
        <ButtonTable>
          <FontAwesomeIcon icon={faSortAlphaDown} className="cursor-pointer" />
        </ButtonTable>
        <ButtonTable>
          <FontAwesomeIcon icon={faCube} className="cursor-pointer" />
        </ButtonTable>
      </Ul>
    ),
    action: (
      <Ul className=" m-0 pt-1">
        <div>
          <input type="checkbox" />
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
    ),
    isFiltered: true
  },
  {
    _id: "12",
    type: "2D",
    name: "Jernell_small_new_V5_corona_884599_cam2.zip",
    date: "2010/04/25",
    size: "3 MB",
    status: (
      <Ul className="m-0">
        <div>
          <P data-tip data-for="download">
            <FontAwesomeIcon
              icon={faArrowDown}
              className="cursor-pointer text-success"
            />
          </P>
          <ReactTooltip id="download" aria-haspopup="true" role="tooltip">
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
          <ReactTooltip id="compose" aria-haspopup="true" role="tooltip">
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
    ),
    result: (
      <ul className="list-inline d-flex justify-content-around m-0">
        <li>
          <div>
            <FontAwesomeIcon icon={faCheckCircle} className="text-success" />
          </div>
        </li>
      </ul>
    ),
    thumbnail: (
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
            <div className="modal-dialog modal-dialog-centered" role="document">
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
    ),
    preview: (
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
    ),
    logs: (
      <Ul className=" m-0">
        <ButtonTable>
          <FontAwesomeIcon icon={faSortAlphaDown} className="cursor-pointer" />
        </ButtonTable>
        <ButtonTable>
          <FontAwesomeIcon icon={faCube} className="cursor-pointer" />
        </ButtonTable>
      </Ul>
    ),
    action: (
      <Ul className=" m-0 pt-1">
        <div>
          <input type="checkbox" />
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
    ),
    isFiltered: true
  },
  {
    _id: "123",
    type: "2D",
    name: "Aernell_small_new_V5_corona_884599_cam2.zip",
    date: "2000/04/25",
    size: "6 MB",
    status: (
      <Ul className="m-0">
        <div>
          <P data-tip data-for="download">
            <FontAwesomeIcon
              icon={faArrowDown}
              className="cursor-pointer text-success"
            />
          </P>
          <ReactTooltip id="download" aria-haspopup="true" role="tooltip">
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
          <ReactTooltip id="compose" aria-haspopup="true" role="tooltip">
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
    ),
    result: (
      <ul className="list-inline d-flex justify-content-around m-0">
        <li>
          <div>
            <FontAwesomeIcon icon={faCheckCircle} className="text-success" />
          </div>
        </li>
      </ul>
    ),
    thumbnail: (
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
            <div className="modal-dialog modal-dialog-centered" role="document">
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
    ),
    preview: (
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
    ),
    logs: (
      <Ul className=" m-0">
        <ButtonTable>
          <FontAwesomeIcon icon={faSortAlphaDown} className="cursor-pointer" />
        </ButtonTable>
        <ButtonTable>
          <FontAwesomeIcon icon={faCube} className="cursor-pointer" />
        </ButtonTable>
      </Ul>
    ),
    action: (
      <Ul className=" m-0 pt-1">
        <div>
          <input type="checkbox" />
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
    ),
    isFiltered: true
  },
  {
    _id: "1231",
    type: "360",
    name: "Vernell_small_new_V5_corona_884599_cam2.zip",
    date: "2020/04/25",
    size: "4 MB",
    status: (
      <Ul className="m-0">
        <div>
          <P data-tip data-for="download">
            <FontAwesomeIcon
              icon={faArrowDown}
              className="cursor-pointer text-success"
            />
          </P>
          <ReactTooltip id="download" aria-haspopup="true" role="tooltip">
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
          <ReactTooltip id="compose" aria-haspopup="true" role="tooltip">
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
    ),
    result: (
      <ul className="list-inline d-flex justify-content-around m-0">
        <li>
          <div>
            <FontAwesomeIcon icon={faCheckCircle} className="text-success" />
          </div>
        </li>
      </ul>
    ),
    thumbnail: (
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
            <div className="modal-dialog modal-dialog-centered" role="document">
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
    ),
    preview: (
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
    ),
    logs: (
      <Ul className=" m-0">
        <ButtonTable>
          <FontAwesomeIcon icon={faSortAlphaDown} className="cursor-pointer" />
        </ButtonTable>
        <ButtonTable>
          <FontAwesomeIcon icon={faCube} className="cursor-pointer" />
        </ButtonTable>
      </Ul>
    ),
    action: (
      <Ul className=" m-0 pt-1">
        <div>
          <input type="checkbox" />
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
    ),
    isFiltered: false
  },
  {
    _id: "12314",
    type: "2D",
    name: "Zernell_small_new_V5_corona_884599_cam2.zip",
    date: "2014/04/25",
    size: "2 MB",
    status: (
      <Ul className="m-0">
        <div>
          <P data-tip data-for="download">
            <FontAwesomeIcon
              icon={faArrowDown}
              className="cursor-pointer text-success"
            />
          </P>
          <ReactTooltip id="download" aria-haspopup="true" role="tooltip">
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
          <ReactTooltip id="compose" aria-haspopup="true" role="tooltip">
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
    ),
    result: (
      <ul className="list-inline d-flex justify-content-around m-0">
        <li>
          <div>
            <FontAwesomeIcon icon={faCheckCircle} className="text-success" />
          </div>
        </li>
      </ul>
    ),
    thumbnail: (
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
            <div className="modal-dialog modal-dialog-centered" role="document">
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
    ),
    preview: (
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
    ),
    logs: (
      <Ul className=" m-0">
        <ButtonTable>
          <FontAwesomeIcon icon={faSortAlphaDown} className="cursor-pointer" />
        </ButtonTable>
        <ButtonTable>
          <FontAwesomeIcon icon={faCube} className="cursor-pointer" />
        </ButtonTable>
      </Ul>
    ),
    action: (
      <Ul className=" m-0 pt-1">
        <div>
          <input type="checkbox" />
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
    ),
    isFiltered: false
  }
];

export default function getData() {
  return Data;
}
