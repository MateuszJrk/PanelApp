import React from "react";
import { Col, Card, CardBody, Media, Row } from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faFolderOpen,
  faCheckCircle,
  faMagic,
  faUpload,
  faTimesCircle
} from "@fortawesome/free-solid-svg-icons";

const Statistics = () => (
  <Row className=" mb-5">
    <Col sm="6" xl>
      <Card className="flex-fill">
        <CardBody className="py-2 m-0">
          <Media>
            <div className="d-inline-block mt-2 mr-3">
              <FontAwesomeIcon
                icon={faArrowDown}
                className=" text-primary fa-2x "
              />
            </div>
            <Media body>
              <h3 className="mb-0">Download</h3>
              <div className="mb-0 ">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className=" text-success mr-1"
                />
                50
              </div>
              <div className="mb-0 ">
                <FontAwesomeIcon
                  icon={faTimesCircle}
                  className=" text-danger mr-1"
                />
                15
              </div>
            </Media>
          </Media>
        </CardBody>
      </Card>
    </Col>
    <Col sm="6" xl>
      <Card className="flex-fill">
        <CardBody className="py-2 m-0">
          <Media>
            <div className="d-inline-block mt-2 mr-3">
              <FontAwesomeIcon
                icon={faMagic}
                className=" text-primary fa-2x "
              />
            </div>
            <Media body>
              <h3 className="mb-0 ">Composed</h3>
              <div className="mb-0 ">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className=" text-success mr-1"
                />
                50
              </div>
              <div className="mb-0 ">
                <FontAwesomeIcon
                  icon={faTimesCircle}
                  className=" text-danger mr-1"
                />
                15
              </div>
            </Media>
          </Media>
        </CardBody>
      </Card>
    </Col>

    <Col sm="6" xl>
      <Card className="flex-fill">
        <CardBody className="py-2 m-0">
          <Media>
            <div className="d-inline-block mt-2 mr-3">
              <FontAwesomeIcon
                icon={faFolderOpen}
                className=" text-primary fa-2x "
              />
            </div>
            <Media body>
              <h3 className="mb-0">Unzipped</h3>
              <div className="mb-0 ">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className=" text-success mr-1"
                />
                50
              </div>
              <div className="mb-0 ">
                <FontAwesomeIcon
                  icon={faTimesCircle}
                  className=" text-danger mr-1"
                />
                15
              </div>
            </Media>
          </Media>
        </CardBody>
      </Card>
    </Col>
    <Col sm="6" xl>
      <Card className="flex-fill">
        <CardBody className="py-2 m-0">
          <Media>
            <div className="d-inline-block mt-2 mr-3">
              <FontAwesomeIcon
                icon={faUpload}
                className=" text-primary fa-2x "
              />
            </div>
            <Media body>
              <h3 className="mb-0">Uploaded</h3>
              <div className="mb-0 ">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className=" text-success mr-1"
                />
                50
              </div>
              <div className="mb-0 ">
                <FontAwesomeIcon
                  icon={faTimesCircle}
                  className=" text-danger mr-1"
                />
                15
              </div>
            </Media>
          </Media>
        </CardBody>
      </Card>
    </Col>
  </Row>
);

export default Statistics;
