import React from "react";

import Wrapper from "../components/Wrapper";
import Sidebar from "../components/Sidebar/Sidebar";
import Main from "../components/Main";
import Navbar from "../components/Navbar/Navbar";
import Content from "../components/Content";
import Footer from "../components/Footer/Footer";
import Statistics from "../components/Main/Statistics";

import MainContent from "../components/Main/Main";

import Settings from "../components/Settings";

const Dashboard = () => (
  <React.Fragment>
    <Wrapper>
      <Sidebar />
      <Main>
        <Navbar />
        <Content>
          <Statistics />
          <MainContent />
        </Content>
        <Footer />
        <Settings />
      </Main>
    </Wrapper>
  </React.Fragment>
);

export default Dashboard;
