import React from "react"


const AuthorizedComponent = ({ children }: { children: React.ReactNode }) => {
  // JSX
  return (
    <React.Fragment>
      AuthorizedComponent
      { children }
    </React.Fragment>
  )
}

export default AuthorizedComponent;
