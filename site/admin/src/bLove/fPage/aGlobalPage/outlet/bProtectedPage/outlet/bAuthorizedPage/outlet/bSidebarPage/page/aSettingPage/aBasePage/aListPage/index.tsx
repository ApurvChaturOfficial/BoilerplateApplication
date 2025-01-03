import React from "react";
import { z } from "zod";

import BaseListComponent from "@/bLove/cComponent/aGlobalComponent/outlet/bProtectedComponent/outlet/bAuthorizedComponent/outlet/bSidebarComponent/children/aSettingComponent/cBaseComponent/aListComponent";

import { listSchema } from "./extra/schema";
import { data } from "./extra/data";
import { columns } from "./extra/columns";
import { header } from "./extra/header";


function getTasks() {
  return z.array(listSchema).parse(data);
}

const BaseListPage = () => {
  // Function
  const data = getTasks();

  // JSX
  return (
    <React.Fragment>
      {/* BaseListPage */}
      <BaseListComponent header={header} data={data} columns={columns} />
    </React.Fragment>
  )
}

export default BaseListPage;
