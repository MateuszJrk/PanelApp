import React from "react";

import Wrapper from "../components/Wrapper";
import Sidebar from "../components/Sidebar/Sidebar";
import Main from "../components/Main";
import Navbar from "../components/Navbar/Navbar";
import Content from "../components/Content";
import Footer from "../components/Footer/Footer";
import Statistics from "../components/Main/Statistics/Statistics";

import Table from "../components/Main/Table/Table";

import Settings from "../components/Settings";

const Dashboard = () => (
  <React.Fragment>
    <Wrapper>
      <Sidebar />
      <Main>
        <Navbar />
        <Content>
          <Statistics />
          <Table />
        </Content>
        <Footer />
        <Settings />
      </Main>
    </Wrapper>
  </React.Fragment>
);

export default Dashboard;
