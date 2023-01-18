import React, { Component } from 'react'

// import components
import SideBar from './SideBar';

export default class Dashboard extends Component {
  render() {
    return (
      <div className='d-flex justify-content-center'>
        <SideBar />
      </div>
    )
  }
}
