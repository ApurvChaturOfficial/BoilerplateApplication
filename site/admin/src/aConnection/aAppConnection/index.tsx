import React from "react"
import { Helmet } from "react-helmet-async";
import { Toaster } from "../bShadcnConnection/components/ui/toaster";


const AppConnection = () => {
  // JSX
  return (
    <React.Fragment>
      {/* AppConnection */}
      
      <Helmet><title>Boilerplate Application</title></Helmet>
      <Toaster />

      Welcome to Boilerplate Application

    </React.Fragment>
  )
}

export default AppConnection;
