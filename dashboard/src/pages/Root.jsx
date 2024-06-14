import React from 'react'
import PropTypes from 'prop-types'
import SideBar from '../components/Dashboard/SideBar'
import ContentWrapper from '../components/Dashboard/ContentWrapper'

const root = props => {
  return (
    <React.Fragment>
    <div id="wrapper">
      <SideBar />
      <ContentWrapper />
    </div>
</React.Fragment>
  )
}

root.propTypes = {}

export default root