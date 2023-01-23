import React, { Component } from "react";
import "../styles/SideBar.css";

import { BiSearch } from "react-icons/bi";
import { MdHomeFilled } from "react-icons/md";
import { VscLibrary } from "react-icons/vsc";
import { MdPlaylistAdd } from "react-icons/md";
import { FcLike } from "react-icons/fc";

// Import Components
import NavBar from "./NavBar";

export default class SideBar extends Component {
  render() {
    return (
      <>
        <div className="col-md-6">
          <div className="side_bar">
            <a href="#" className="dotted-menu">
              <h1 className="dotted_menu">...</h1>
            </a>

            <div className="sideBar">
              <ul className="side_menus">
                <li>
                  <a href="#" className="nav-item">
                    <MdHomeFilled className="home-icon" />
                    Home
                  </a>
                </li>

                <li>
                  <a href="#" className="nav-item">
                    <BiSearch className="search_icon" />
                    Search
                  </a>
                </li>

                <li>
                  <a href="#" className="nav-item">
                    <VscLibrary className="library-icon" />
                    Your Library
                  </a>
                </li>

                <li>
                  <a href="#" className="nav-item">
                    <MdPlaylistAdd className="create-icon" />
                    Create Playlist
                  </a>
                </li>

                <li>
                  <a href="#" className="nav-item">
                    <FcLike className="liked-icon" />
                    Liked Songs
                  </a>
                </li>
              </ul>
            </div>
            <hr className="line" />
          </div>
        </div>
      </>
    );
  }
}
