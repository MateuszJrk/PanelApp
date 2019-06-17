import React from "react";
import { Container, Row, Col } from "reactstrap";
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
    <Container fluid>
      <Row className="text-muted">
        <Col className="text-center">
          <ul className="list-inline ">
            <small>
              <li className="list-inline-item mr-5">
                <div className="row">
                  <FontAwesomeIcon className="mr-1" icon={faPen} />
                  Compose
                </div>
              </li>
              <li className="list-inline-item mr-5">
                <div className="row">
                  <FontAwesomeIcon className="mr-1" icon={faArrowDown} />
                  Download Status
                </div>
              </li>
              <li className="list-inline-item mr-5">
                <div className="row">
                  <FontAwesomeIcon className="mr-1" icon={faSpinner} />
                  Composing
                </div>
              </li>
              <li className="list-inline-item mr-5">
                <div className="row">
                  <FontAwesomeIcon className="mr-1" icon={faFolderOpen} />
                  Unzip Status
                </div>
              </li>
              <li className="list-inline-item mr-5">
                <div className="row">
                  <FontAwesomeIcon className="mr-1" icon={faShare} />
                  Package in
                </div>
              </li>
              <li className="list-inline-item mr-5">
                <div className="row">
                  <FontAwesomeIcon className="mr-1" icon={faMagic} />
                  Compose status
                </div>
              </li>
              <li className="list-inline-item mr-5">
                <div className="row">
                  <FontAwesomeIcon className="mr-1" icon={faPen} />
                  Terminate
                </div>
              </li>
              <li className="list-inline-item mr-5">
                <div className="row">
                  <FontAwesomeIcon className="mr-1" icon={faUpload} />
                  Upload Status
                </div>
              </li>
              <li className="list-inline-item mr-5">
                <div className="row">
                  <FontAwesomeIcon className="mr-1" icon={faEye} />
                  Preview
                </div>
              </li>
              <li className="list-inline-item mr-5">
                <div className="row">
                  <FontAwesomeIcon className="mr-1" icon={faSortAlphaDown} />
                  Compose Logs
                </div>
              </li>
              <li className="list-inline-item mr-5">
                <div className="row">
                  <FontAwesomeIcon className="mr-1" icon={faStopCircle} />
                  Error
                </div>
              </li>
              <li className="list-inline-item mr-5">
                <div className="row">
                  <FontAwesomeIcon className="mr-1" icon={faCube} />
                  Brick Logs
                </div>
              </li>
            </small>
          </ul>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
