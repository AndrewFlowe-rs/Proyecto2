import React from 'react'
import PropTypes from 'prop-types'
import SideBar from '../components/Dashboard/SideBar'

import TopBar from '../components/Dashboard/TopBar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const Root = () => {
  return (
    <React.Fragment>
    <div id="wrapper">
      <SideBar />
      <div id="content-wrapper" className="d-flex flex-column"style={{ backgroundColor: "antiquewhite"}}>
        {/*<!-- Main Content -->*/}
        <div id="content">
          <TopBar />

          <Outlet />

          <Footer />
        </div>
      </div>
    </div>
</React.Fragment>
  )
}

root.propTypes = {}

export default Root