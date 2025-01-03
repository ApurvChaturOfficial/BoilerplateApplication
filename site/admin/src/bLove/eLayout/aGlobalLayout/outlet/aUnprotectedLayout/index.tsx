import React from "react"
import { Outlet } from "react-router-dom";

import UnprotectedComponent from "@/bLove/cComponent/aGlobalComponent/outlet/aUnprotectedComponent";


const UnprotectedLayout = () => {
  // JSX
  return (
    <React.Fragment>
      {/* UnprotectedLayout */}

      <UnprotectedComponent>
        <Outlet />
      </UnprotectedComponent>

    </React.Fragment>
  )
}

export default UnprotectedLayout;
