import React from "react";
import logo from "../../assets/img/logo-dark.png";
import styled from "styled-components";

const Img = styled.img`
  width: 100%;
`;

const Logo = () => {
  return (
    <a className="sidebar-brand" href="/">
      <Img
        src={logo}
        alt="logo"
        className="align-middle text-primary mr-2"
        size={24}
      />{" "}
    </a>
  );
};

export default Logo;
