import React from "react"


const AuthenticatedComponent = ({ children }: { children: React.ReactNode }) => {
  // JSX
  return (
    <React.Fragment>
      {/* AuthenticatedComponent */}
      { children }
    </React.Fragment>
  )
}

export default AuthenticatedComponent;
