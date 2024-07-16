import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import ContentRowTop from '../components/Dashboard/ContentRowTop'
const metrics = [
  {
    show: true,
    title: "Productos",
    color: "primary",
    digit: 21,
    icon: "film",
  },
  {
    show: true,
    title: " Usuarios",
    color: "success",
    digit: 79,
    icon: "award",
  },
  {
    show: false,
    title: "Ordenes ",
    color: "warning",
    digit: 49,
    icon: "user",
  },
];


const Dashboard =() => {
 
  return (
<ContentRowTop />
  )
}

Dashboard.propTypes = {}

export default Dashboard