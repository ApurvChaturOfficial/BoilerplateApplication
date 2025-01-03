import React from "react"
import { Outlet } from "react-router-dom";

import GlobalComponent from "@/bLove/cComponent/aGlobalComponent";


const GlobalLayout = () => {
  // JSX
  return (
    <React.Fragment>
      {/* GlobalLayout */}

      <GlobalComponent>
        <Outlet />
      </GlobalComponent>

    </React.Fragment>
  )
}

export default GlobalLayout;
