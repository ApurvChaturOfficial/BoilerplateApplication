import React from "react"
import { Outlet } from "react-router-dom";

import ProtectedComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent";


const ProtectedLayout = () => {
  // JSX
  return (
    <React.Fragment>
      {/* ProtectedLayout */}

      <ProtectedComponent>
        <Outlet />
      </ProtectedComponent>

    </React.Fragment>
  )
}

export default ProtectedLayout;
