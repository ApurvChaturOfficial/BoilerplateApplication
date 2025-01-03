import React from "react"
import { Outlet } from "react-router-dom";

import AuthenticatedComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/aAuthenticatedComponent";


const AuthenticatedLayout = () => {
  // JSX
  return (
    <React.Fragment>
      {/* AuthenticatedLayout */}

      <AuthenticatedComponent>
        <Outlet />
      </AuthenticatedComponent>

    </React.Fragment>
  )
}

export default AuthenticatedLayout;
