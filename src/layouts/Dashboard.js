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

import Auth from "../pages/auth/Auth";

const auth = new Auth();

class Dashboard extends React.Component {
  componentDidMount() {
    auth.handleAuthentication();
  }

  render() {
    return (
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
  }
}

export default Dashboard;
