import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const ServerStatus = () => {
  return (
    <div className=" d-none d-lg-block  text-muted">
      <small>
        <p>
          <strong>Servers Status:</strong>
        </p>

        <p>
          <FontAwesomeIcon icon={faCircle} className="text-success ml-3 mr-1" />
          ftp_server: | 5:00 PM
        </p>
        <p>
          <FontAwesomeIcon icon={faCircle} className="text-success ml-3 mr-1" />
          virtualizer: | 5:00 PM
        </p>
        <p>
          <FontAwesomeIcon icon={faCircle} className="text-success ml-3 mr-1" />
          ftp_info: | 5:00 PM
        </p>
        <p>
          <strong>Instances:</strong>
        </p>
        <p className="ml-3">
          <a href="http://q0s.pl:8008/instances">
            http://q0s.pl:8008/instances
          </a>
        </p>
        <p>
          <strong>Api:</strong>
        </p>
        <p className="ml-3">
          <a href="http://q0s.pl:8008/packages">http://q0s.pl:8008/packages</a>
        </p>
      </small>
    </div>
  );
};

export default ServerStatus;
