import React from "react"
import { Outlet } from "react-router-dom";


const SidebarLayout = () => {
  // JSX
  return (
    <React.Fragment>
      SidebarLayout
      <Outlet />
    </React.Fragment>
  )
}

export default SidebarLayout;
