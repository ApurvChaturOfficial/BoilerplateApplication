import React from "react"
import { Outlet } from "react-router-dom";


const ProtectedLayout = () => {
  // JSX
  return (
    <React.Fragment>
      ProtectedLayout
      <Outlet />
    </React.Fragment>
  )
}

export default ProtectedLayout;
