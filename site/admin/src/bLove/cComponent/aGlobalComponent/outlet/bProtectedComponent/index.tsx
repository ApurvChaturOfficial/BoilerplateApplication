import React from "react"


const ProtectedComponent = ({ children }: { children: React.ReactNode }) => {
  // JSX
  return (
    <React.Fragment>
      {/* ProtectedComponent */}
      { children }
    </React.Fragment>
  )
}

export default ProtectedComponent;
