import React from "react";
import { connect } from "react-redux";

import Wrapper from "../components/Wrapper";
import Sidebar from "../components/Sidebar/Sidebar";
import Main from "../components/Main";
import Navbar from "../components/Navbar/Navbar";
import Content from "../components/Content";
import Footer from "../components/Footer/Footer";
import Statistics from "../components/Main/Statistics/Statistics";

import Table from "../components/Main/Table/Table";

import Settings from "../components/Settings";

class Dashboard extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Wrapper>
          <Sidebar />
          <Main>
            <Navbar test={this.props.data} />
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

const mapStateToProps = state => {
  console.log(state.data);
  return { data: state.data };
};

export default connect(
  mapStateToProps,
  null
)(Dashboard);
