import React from "react";
import { Card, CardHeader, CardTitle, CardBody, CustomInput } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpinner,
  faCheckCircle,
  faStopCircle,
  faClock,
  faEye,
  faEyeSlash
} from "@fortawesome/free-solid-svg-icons";

const Filters = () => {
  return (
    <div className="row justify-content-around text-muted border-0">
      <Card className="m-0 p-0 border-0 bg-light">
        <CardHeader className="border-0 bg-light ">
          <CardTitle className="mb-0 ">
            <p className="m-0 text-center">type:</p>
          </CardTitle>
        </CardHeader>
        <CardBody className="m-0 p-0">
          <div className="row ">
            <span className="nav-link border rounded p-1 cursor-pointer bg-light">
              <small>All</small>
            </span>
            <span className="nav-link border rounded p-1 cursor-pointer">
              <small>360</small>
            </span>
            <span className="nav-link border rounded p-1 cursor-pointer">
              <small>2D</small>
            </span>
          </div>
        </CardBody>
      </Card>
      <Card className="m-0 p-0 border-0 bg-light">
        <CardHeader className="border-0 bg-light ">
          <CardTitle className="mb-0 ">
            <p className="m-0 text-center">result:</p>
          </CardTitle>
        </CardHeader>
        <CardBody className="m-0 p-0">
          <div className="row">
            <span className="nav-link border rounded p-1 cursor-pointer bg-light">
              <small>All</small>
            </span>
            <span className="nav-link border rounded p-1 w-3 cursor-pointer">
              <small>unprocessed</small>
            </span>
            <span className="nav-link border rounded p-1">
              <FontAwesomeIcon icon={faSpinner} className="cursor-pointer" />
            </span>
            <span className="nav-link border rounded p-1">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="cursor-pointer"
              />
            </span>

            <span className="nav-link border rounded p-1">
              <FontAwesomeIcon icon={faStopCircle} className="cursor-pointer" />
            </span>
            <span className="nav-link border rounded p-1">
              <FontAwesomeIcon icon={faClock} className="cursor-pointer" />
            </span>
          </div>
        </CardBody>
      </Card>

      <Card className="m-0 p-0 border-0 bg-light">
        <CardHeader className="border-0 bg-light">
          <CardTitle className="mb-0 ">
            <p className="m-0 text-center">thumbnails:</p>
          </CardTitle>
        </CardHeader>
        <CardBody className="m-0 p-0">
          <div className="row justify-content-center mx-3 ">
            <span className="nav-link border bg-light rounded p-1">
              <FontAwesomeIcon icon={faEye} className="cursor-pointer " />
            </span>

            <span className="nav-link  border rounded p-1">
              <FontAwesomeIcon icon={faEyeSlash} className="cursor-pointer" />
            </span>
          </div>
        </CardBody>
      </Card>
      <Card className="m-0 p-0 border-0 bg-light">
        <CardHeader className="border-0 bg-light">
          <CardTitle className="mb-0 ">
            <p className="m-0 text-center">ftp:</p>
          </CardTitle>
        </CardHeader>
        <CardBody className="m-0 p-0">
          <div className="row justify-content-center ">
            <span className="nav-link bg-light border rounded p-1">
              <FontAwesomeIcon icon={faEye} className="cursor-pointer" />
            </span>

            <span className="nav-link border rounded p-1">
              <FontAwesomeIcon icon={faEyeSlash} className="cursor-pointer" />
            </span>
          </div>
        </CardBody>
      </Card>
      <Card className="m-0 p-0 border-0 bg-light">
        <CardHeader className="border-0 bg-light ">
          <CardTitle className="mb-0 ">
            <p className="m-0 text-center">sort by:</p>
          </CardTitle>
        </CardHeader>
        <CardBody className="m-0 p-0">
          <div className=" text-secondary ">
            <CustomInput
              type="select"
              id="exampleCustomSelect"
              name="customSelect"
              className=" text-muted bg-light"
            >
              <option value="">Date-latest</option>
              <option>One</option>
              <option>Two</option>
              <option>Three</option>
            </CustomInput>
          </div>
        </CardBody>
      </Card>
      <Card className="m-0 p-0 border-0 bg-light ">
        <CardHeader className="border-0 bg-light">
          <CardTitle className="mb-0 ">
            <p className="m-0 text-center">between:</p>
          </CardTitle>
        </CardHeader>
        <CardBody className="m-0 p-0">
          <div className=" m-0 p-0">
            <input
              className="btn border rounded table-input_size"
              data-date-format="dd/mm/yyyy"
              id="datepicker"
              placeholder="dd/mm/yyyy"
            />
          </div>
          <div className=" m-0 p-0">
            <input
              className="btn border rounded table-input_size"
              data-date-format="dd/mm/yyyy"
              id="datepicker"
              placeholder="dd/mm/yyyy"
            />
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Filters;
