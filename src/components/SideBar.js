import React, { Component } from 'react'

// Import Components
import NavBar from './NavBar'

export default class SideBar extends Component {
  render() {
    return (
        <>
              <div className='col-md-4'>
                    <h1>SideBar</h1>
                </div>
                <NavBar />
        </>

    )
  }
}
