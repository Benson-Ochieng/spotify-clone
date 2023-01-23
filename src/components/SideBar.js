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
        <div className="col-md-4">
          <div className="side_bar">
            <h1 className="dotted_menu">...</h1>
            <div className="sideBar">
              <ul className="side_menus">
                <a href="#" className="nav-item">
                  <MdHomeFilled className="home-icon" />
                  <li className="home">Home</li>
                </a>

                <a href="#" className="nav-item">
                  <BiSearch className="search_icon" />
                  <li className="search">Search</li>
                </a>

                <a href="#" className="nav-item">
                  <VscLibrary className="library-icon" />
                  <li className="search">Your Library</li>
                </a>

                <a href="#" className="nav-item">
                  <MdPlaylistAdd className="create-icon" />
                  <li className="search">Create Playlist</li>
                </a>

                <a href="#" className="nav-item">
                  <FcLike className="liked-icon" />
                  <li className="search">Liked Songs</li>
                </a>
              </ul>
            </div>
            <hr className="line" />
          </div>
        </div>
      </>
    );
  }
}
