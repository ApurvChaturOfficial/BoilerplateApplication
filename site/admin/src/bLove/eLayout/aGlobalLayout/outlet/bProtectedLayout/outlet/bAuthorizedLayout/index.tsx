import React from "react"
import { Outlet } from "react-router-dom";

import AuthorizedComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizedComponent";


const AuthorizedLayout = () => {
  // JSX
  return (
    <React.Fragment>
      {/* AuthorizedLayout */}

      <AuthorizedComponent>
        <Outlet />
      </AuthorizedComponent>

    </React.Fragment>
  )
}

export default AuthorizedLayout;
