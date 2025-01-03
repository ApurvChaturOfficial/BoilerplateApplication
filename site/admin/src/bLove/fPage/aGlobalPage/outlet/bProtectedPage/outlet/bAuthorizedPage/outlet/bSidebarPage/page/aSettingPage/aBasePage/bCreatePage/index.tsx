import React from "react";
import { z } from "zod";

import BaseCreateComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizedComponent/outlet/bSidebarComponent/children/aSettingComponent/cBaseComponent/bCreateComponent";


const extras = {
  header: {
    title: "Data Form One",
    subtitle: "This is just some subtitle for the data-form-one...",
    buttons: []
  },

  data: [
    // Basic Information
    {
      display: true,
      title: "Basic Information",
      subtitle: "This is just some subtitle for the basic information...",
      inputs: [
        { name: "aTitle", label: "Title", type: "text", placeholder: "Please enter title..." },
        { name: "aTitle", label: "Title", type: "text", placeholder: "Please enter title..." },
        { name: "aTitle", label: "Title", type: "text", placeholder: "Please enter title..." },
        { name: "aTitle", label: "Title", type: "text", placeholder: "Please enter title..." },
        { name: "aTitle", label: "Title", type: "text", placeholder: "Please enter title..." },
        { name: "aTitle", label: "Title", type: "text", placeholder: "Please enter title..." },
      ],  
    },

    // Personal Information
    {
      display: true,
      title: "Personal Information",
      subtitle: "This is just some subtitle for the personal information...",
      inputs: [
        { name: "aTitle", label: "Title", type: "text", placeholder: "Please enter title..." },
        { name: "aTitle", label: "Title", type: "text", placeholder: "Please enter title..." },
        { name: "aTitle", label: "Title", type: "text", placeholder: "Please enter title..." },
        { name: "aTitle", label: "Title", type: "text", placeholder: "Please enter title..." },
        { name: "aTitle", label: "Title", type: "text", placeholder: "Please enter title..." },
        { name: "aTitle", label: "Title", type: "text", placeholder: "Please enter title..." },
      ],  
    },

    // Relation Information
    {
      display: true,
      title: "Relation Information",
      subtitle: "This is just some subtitle for the relation information...",
      inputs: [
        { name: "aTitle", label: "Title", type: "text", placeholder: "Please enter title..." },
        { name: "aTitle", label: "Title", type: "text", placeholder: "Please enter title..." },
        { name: "aTitle", label: "Title", type: "text", placeholder: "Please enter title..." },
        { name: "aTitle", label: "Title", type: "text", placeholder: "Please enter title..." },
        { name: "aTitle", label: "Title", type: "text", placeholder: "Please enter title..." },
        { name: "aTitle", label: "Title", type: "text", placeholder: "Please enter title..." },
      ],  
    },

    // More Information
    {
      display: true,
      title: "More Information",
      subtitle: "This is just some subtitle for the more information...",
      inputs: [
        { name: "aTitle", label: "Title", type: "text", placeholder: "Please enter title..." },
        { name: "aTitle", label: "Title", type: "text", placeholder: "Please enter title..." },
        { name: "aTitle", label: "Title", type: "text", placeholder: "Please enter title..." },
        { name: "aTitle", label: "Title", type: "text", placeholder: "Please enter title..." },
        { name: "aTitle", label: "Title", type: "text", placeholder: "Please enter title..." },
        { name: "aTitle", label: "Title", type: "text", placeholder: "Please enter title..." },
      ],  
    },

    // Critical Information
    {
      display: true,
      title: "Critical Information",
      subtitle: "This is just some subtitle for the critical information...",
      inputs: [
        { name: "aTitle", label: "Title", type: "text", placeholder: "Please enter title..." },
        { name: "aTitle", label: "Title", type: "text", placeholder: "Please enter title..." },
        { name: "aTitle", label: "Title", type: "text", placeholder: "Please enter title..." },
        { name: "aTitle", label: "Title", type: "text", placeholder: "Please enter title..." },
        { name: "aTitle", label: "Title", type: "text", placeholder: "Please enter title..." },
        { name: "aTitle", label: "Title", type: "text", placeholder: "Please enter title..." },
      ],  
    },
  ],

  formSchema: z.object({
    aTitle: z.string()
      .min(3, { message: "Please enter atlest 3 characters" })
      .max(50, { message: "Please enter atmost 50 characters" }),
  }),

  formDefaultValue: {
    aTitle: "",
  },
}

const BaseCreatePage = () => {
  // JSX
  return (
    <React.Fragment>
      {/* BaseCreatePage */}
      <BaseCreateComponent header={extras.header} data={extras.data} />
    </React.Fragment>
  )
}

export default BaseCreatePage;
