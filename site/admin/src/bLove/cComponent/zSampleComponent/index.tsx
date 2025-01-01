import React from "react"


const SampleComponent = ({ children }: { children: React.ReactNode }) => {
  // JSX
  return (
    <React.Fragment>
      SampleComponent
      { children }
    </React.Fragment>
  )
}

export default SampleComponent;
