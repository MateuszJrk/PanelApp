import React from "react";
import { Container, Table } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faFolderOpen,
  faPen,
  faSpinner,
  faMagic,
  faUpload,
  faShare,
  faEye,
  faSortAlphaDown,
  faStopCircle,
  faCube
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => (
  <footer className="footer">
    <Container>
      <small>
        <Table borderless className="text-muted ">
          <tbody>
            <tr>
              <td className="p-0 m-0">
                <FontAwesomeIcon className="mr-1" icon={faPen} />
                Compose
              </td>
              <td className="p-0 m-0">
                <FontAwesomeIcon className="mr-1" icon={faArrowDown} />
                Download Status
              </td>
              <td className="p-0 m-0">
                <FontAwesomeIcon className="mr-1" icon={faSpinner} />
                Composing
              </td>
              <td className="p-0 m-0">
                <FontAwesomeIcon className="mr-1" icon={faFolderOpen} />
                Unzip Status
              </td>
            </tr>
            <tr>
              <td className="p-0 m-0">
                <FontAwesomeIcon className="mr-1" icon={faCube} />
                Brick Logs
              </td>
              <td className="p-0 m-0">
                <FontAwesomeIcon className="mr-1" icon={faUpload} />
                Upload Status
              </td>
              <td className="p-0 m-0">
                <FontAwesomeIcon className="mr-1" icon={faEye} />
                Preview
              </td>
              <td className="p-0 m-0">
                <FontAwesomeIcon className="mr-1" icon={faSortAlphaDown} />
                Compose Logs
              </td>
            </tr>
            <tr>
              <td className="p-0 m-0">
                <FontAwesomeIcon className="mr-1" icon={faShare} />
                Package in
              </td>
              <td className="p-0 m-0">
                <FontAwesomeIcon className="mr-1" icon={faMagic} />
                Compose status
              </td>
              <td className="p-0 m-0">
                <FontAwesomeIcon className="mr-1" icon={faStopCircle} />
                Error
              </td>

              <td className="p-0 m-0">
                <FontAwesomeIcon className="mr-1" icon={faPen} />
                Terminate
              </td>
            </tr>
          </tbody>
        </Table>
      </small>
    </Container>
  </footer>
);

export default Footer;
