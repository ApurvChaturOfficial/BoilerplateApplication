import React from "react"
import { Outlet } from "react-router-dom";


const TopbarLayout = () => {
  // JSX
  return (
    <React.Fragment>
      TopbarLayout
      <Outlet />
    </React.Fragment>
  )
}

export default TopbarLayout;
