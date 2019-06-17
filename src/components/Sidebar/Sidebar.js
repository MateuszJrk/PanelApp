import React from "react";
import { connect } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";
import { Collapse } from "reactstrap";
import PerfectScrollbar from "react-perfect-scrollbar";
import Logo from "./Logo";

import routes from "../../routes/index";

const SidebarCategory = withRouter(
  ({ name, icon: Icon, isOpen, children, onClick, location, to }) => {
    const getSidebarItemClass = path => {
      return location.pathname.indexOf(path) !== -1;
    };

    return (
      <li className={"sidebar-item " + getSidebarItemClass(to)}>
        <span
          data-toggle="collapse"
          className={"sidebar-link " + (!isOpen ? "collapsed" : "")}
          onClick={onClick}
          aria-expanded={isOpen ? "true" : "false"}
        >
          <Icon size={18} className="align-middle mr-3" />
          <span className="align-middle">{name}</span>
        </span>
        <Collapse isOpen={isOpen}>
          <ul id="item" className={"sidebar-dropdown list-unstyled"}>
            {children}
          </ul>
        </Collapse>
      </li>
    );
  }
);
const SidebarItem = withRouter(({ name, icon: Icon, location, to }) => {
  const getSidebarItemClass = path => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <li className={"sidebar-item " + getSidebarItemClass(to)}>
      <NavLink to={to} className="sidebar-link" activeClassName="active">
        {Icon ? <Icon size={18} className="align-middle mr-3" /> : null}
        {name}
      </NavLink>
    </li>
  );
});

class Sidebar extends React.Component {
  state = {
    index: true
  };

  toggle = index => {
    this.setState(state => ({
      [index]: !state[index]
    }));
  };

  componentWillMount() {
    /* Open collapse element that matches current url */
    const pathName = this.props.location.pathname;

    routes.forEach((route, index) => {
      const isActive = pathName.indexOf(route.path) === 0;
      const isOpen = route.open;
      const isHome = route.containsHome && pathName === "/" ? true : false;

      this.setState(() => ({
        [index]: isActive || isOpen || isHome
      }));
    });
  }

  render() {
    const { sidebar } = this.props;

    return (
      <nav
        className={
          "sidebar" +
          (!sidebar.isOpen ? " toggled" : "") +
          (sidebar.isSticky ? " sidebar-sticky" : "")
        }
      >
        <div className="sidebar-content">
          <PerfectScrollbar>
            <Logo />

            <ul className="sidebar-nav">
              {routes.map((category, index) => {
                return (
                  <React.Fragment key={index}>
                    {category.header ? (
                      <li className="sidebar-header">{category.header}</li>
                    ) : null}

                    {category.children ? (
                      <SidebarCategory
                        name={category.name}
                        badgeColor={category.badgeColor}
                        badgeText={category.badgeText}
                        icon={category.icon}
                        to={category.path}
                        isOpen={this.state[index]}
                        onClick={() => this.toggle(index)}
                      >
                        {category.children.map((route, index) => (
                          <SidebarItem
                            key={index}
                            name={route.name}
                            to={route.path}
                            badgeColor={route.badgeColor}
                            badgeText={route.badgeText}
                          />
                        ))}
                      </SidebarCategory>
                    ) : (
                      <SidebarItem
                        name={category.name}
                        to={category.path}
                        icon={category.icon}
                        badgeColor={category.badgeColor}
                        badgeText={category.badgeText}
                      />
                    )}
                  </React.Fragment>
                );
              })}
            </ul>
          </PerfectScrollbar>
        </div>
      </nav>
    );
  }
}

export default withRouter(
  connect(store => ({
    sidebar: store.sidebar,
    layout: store.layout
  }))(Sidebar)
);
