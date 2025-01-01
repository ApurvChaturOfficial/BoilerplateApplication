import React from "react"
import { Outlet } from "react-router-dom";


const AuthorizedLayout = () => {
  // JSX
  return (
    <React.Fragment>
      AuthorizedLayout
      <Outlet />
    </React.Fragment>
  )
}

export default AuthorizedLayout;
