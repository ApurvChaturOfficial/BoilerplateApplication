import React from "react"
import { Outlet } from "react-router-dom";

import SidebarComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizedComponent/outlet/bSidebarComponent";


const SidebarLayout = () => {
  // JSX
  return (
    <React.Fragment>
      {/* SidebarLayout */}

      <SidebarComponent>
        <Outlet />
      </SidebarComponent>

    </React.Fragment>
  )
}

export default SidebarLayout;
