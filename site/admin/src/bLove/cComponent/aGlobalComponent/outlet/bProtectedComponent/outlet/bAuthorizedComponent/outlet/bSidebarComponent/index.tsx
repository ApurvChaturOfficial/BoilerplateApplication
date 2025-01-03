import React from "react"


const SidebarComponent = ({ children }: { children: React.ReactNode }) => {
  // JSX
  return (
    <React.Fragment>
      {/* SidebarComponent */}
      { children }
    </React.Fragment>
  )
}

export default SidebarComponent;
