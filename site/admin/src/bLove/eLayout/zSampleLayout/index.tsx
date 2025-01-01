import React from "react"
import { Outlet } from "react-router-dom";


const SampleLayout = () => {
  // JSX
  return (
    <React.Fragment>
      SampleLayout
      <Outlet />
    </React.Fragment>
  )
}

export default SampleLayout;
