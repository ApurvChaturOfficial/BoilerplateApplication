import React from "react"
import { Outlet } from "react-router-dom";


const AuthenticatedLayout = () => {
  // JSX
  return (
    <React.Fragment>
      AuthenticatedLayout
      <Outlet />
    </React.Fragment>
  )
}

export default AuthenticatedLayout;
