import React from "react";
import { Badge, Card, CardHeader, CardTitle, CardBody } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpinner,
  faCheckCircle,
  faStopCircle,
  faClock
} from "@fortawesome/free-solid-svg-icons";

const Filters = () => {
  return (
    <div className="row justify-content-around text-muted border-0 mb-5">
      <Card className="m-0 p-0 border-0 bg-light">
        <CardHeader className="border-0 bg-light ">
          <CardTitle className="mb-0 ">
            <p className="m-0 text-center">result:</p>
          </CardTitle>
        </CardHeader>
        <CardBody className="m-0 p-0">
          <div className="row justify-content-around">
            <Badge className="mr-4 mt-2">
              <span className="nav-link cursor-pointer ">All</span>
            </Badge>
            <Badge className="mr-4 mt-2" color="secondary">
              <span className="nav-link cursor-pointer ">Unprocessed</span>
            </Badge>
            <Badge className="mr-4 mt-2 bg-light">
              <span className="nav-link cursor-pointer ">
                <FontAwesomeIcon
                  icon={faSpinner}
                  className="cursor-pointer mr-1"
                />
                Composing
              </span>
            </Badge>
            <Badge className="mr-4 mt-2" color="success">
              <span className="nav-link cursor-pointer ">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="cursor-pointer mr-1"
                />
                Preview
              </span>
            </Badge>
            <Badge className="mr-4 mt-2" color="danger">
              <span className="nav-link cursor-pointer ">
                <FontAwesomeIcon
                  icon={faStopCircle}
                  className="cursor-pointer mr-1"
                />
                Error
              </span>
            </Badge>
            <Badge className="mr-4 mt-2" color="warning">
              <span className="nav-link cursor-pointer ">
                <FontAwesomeIcon
                  icon={faClock}
                  className="cursor-pointer mr-1"
                />
                Initiated
              </span>
            </Badge>
          </div>
        </CardBody>
      </Card>
      {/* <Card className="m-0 p-0 border-0 bg-light ">
        <CardHeader className="border-0 bg-light">
          <CardTitle className="mb-0 ">
            <p className="m-0 text-center">between:</p>
          </CardTitle>
        </CardHeader>
        <CardBody className="m-0 p-0">
          <input
            className="btn border rounded mr-1 table-input_size"
            data-date-format="dd/mm/yyyy"
            id="datepicker"
            placeholder="dd/mm/yyyy"
          />

          <input
            className="btn border rounded table-input_size"
            data-date-format="dd/mm/yyyy"
            id="datepicker"
            placeholder="dd/mm/yyyy"
          />
        </CardBody>
      </Card> */}
    </div>
  );
};

export default Filters;
