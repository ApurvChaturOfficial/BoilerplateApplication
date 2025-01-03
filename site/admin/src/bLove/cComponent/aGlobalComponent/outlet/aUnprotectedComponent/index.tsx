import React from "react"


const UnprotectedComponent = ({ children }: { children: React.ReactNode }) => {
  // JSX
  return (
    <React.Fragment>
      {/* UnprotectedComponent */}
      { children }
    </React.Fragment>
  )
}

export default UnprotectedComponent;
