import React from "react"
import { Outlet } from "react-router-dom";


const UnprotectedLayout = () => {
  // JSX
  return (
    <React.Fragment>
      UnprotectedLayout
      <Outlet />
    </React.Fragment>
  )
}

export default UnprotectedLayout;
