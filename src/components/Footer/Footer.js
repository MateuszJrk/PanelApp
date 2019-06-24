import React from "react";
import { Container } from "reactstrap";
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
import { Table, Tbody, Thead, Tr, Th, Td } from "react-super-responsive-table";

const Footer = () => (
  <footer className="footer">
    <Container>
      <small>
        <Table className="text-muted ">
          <Thead>
            <Tr>
              <Th>
                <FontAwesomeIcon className="mr-1" icon={faPen} />
                Compose
              </Th>
              <Th>
                <FontAwesomeIcon className="mr-1" icon={faArrowDown} />
                Download Status
              </Th>

              <Th>
                <FontAwesomeIcon className="mr-1" icon={faCube} />
                Brick Logs
              </Th>
              <Th>
                <FontAwesomeIcon className="mr-1" icon={faUpload} />
                Upload Status
              </Th>

              <Th>
                <FontAwesomeIcon className="mr-1" icon={faShare} />
                Package in
              </Th>
              <Th>
                <FontAwesomeIcon className="mr-1" icon={faMagic} />
                Compose status
              </Th>
            </Tr>
          </Thead>

          <Tbody>
            <Tr>
              <Td>
                <FontAwesomeIcon className="mr-1" icon={faSpinner} />
                Composing
              </Td>
              <Td>
                <FontAwesomeIcon className="mr-1" icon={faFolderOpen} />
                Unzip Status
              </Td>

              <Td>
                <FontAwesomeIcon className="mr-1" icon={faStopCircle} />
                Error
              </Td>

              <Td>
                <FontAwesomeIcon className="mr-1" icon={faPen} />
                Terminate
              </Td>

              <Td>
                <FontAwesomeIcon className="mr-1" icon={faEye} />
                Preview
              </Td>
              <Td>
                <FontAwesomeIcon className="mr-1" icon={faSortAlphaDown} />
                Compose Logs
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </small>
    </Container>
  </footer>
);

export default Footer;
