import React, { Component } from "react";
import Content from "./Content";
import NavBar from "./NavBar";

// import components
import SideBar from "./SideBar";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <SideBar />
          </div>
          <div className="col-md-8">
            <NavBar />
            <div className="content">
              <Content />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
