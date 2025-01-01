import React from "react"
import { Outlet } from "react-router-dom";


const GlobalLayout = () => {
  // JSX
  return (
    <React.Fragment>
      GlobalLayout
      <Outlet />
    </React.Fragment>
  )
}

export default GlobalLayout;
