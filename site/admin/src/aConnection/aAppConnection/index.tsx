import React from "react"
import { Helmet } from "react-helmet-async";
import { Route, Routes } from "react-router-dom";

import { Toaster } from "../bShadcnConnection/components/ui/toaster";

import endpointRoute from "@/bLove/gRoute/aEndpointRoute";

const GlobalLayout = React.lazy(() => import("@/bLove/eLayout/aGlobalLayout"));
const UnprotectedLayout = React.lazy(() => import("@/bLove/eLayout/aGlobalLayout/outlet/aUnprotectedLayout"));
const ProtectedLayout = React.lazy(() => import("@/bLove/eLayout/aGlobalLayout/outlet/bProtectedLayout"));
const AuthenticatedLayout = React.lazy(() => import("@/bLove/eLayout/aGlobalLayout/outlet/bProtectedLayout/outlet/aAuthenticatedLayout"));
const AuthorizedLayout = React.lazy(() => import("@/bLove/eLayout/aGlobalLayout/outlet/bProtectedLayout/outlet/bAuthorizedLayout"));
const TopbarLayout = React.lazy(() => import("@/bLove/eLayout/aGlobalLayout/outlet/bProtectedLayout/outlet/bAuthorizedLayout/outlet/aTopbarLayout"));
const SidebarLayout = React.lazy(() => import("@/bLove/eLayout/aGlobalLayout/outlet/bProtectedLayout/outlet/bAuthorizedLayout/outlet/bSidebarLayout"));

const BaseListPage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/aSettingPage/aBasePage/aListPage"));
const BaseCreatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/aSettingPage/aBasePage/bCreatePage"));
const BaseRetrievePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/aSettingPage/aBasePage/cRetrievePage"));
const BaseUpdatePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/aSettingPage/aBasePage/dUpdatePage"));
const BaseDeletePage = React.lazy(() => import("@/bLove/fPage/aGlobalPage/outlet/bProtectedPage/outlet/bAuthorizedPage/outlet/bSidebarPage/page/aSettingPage/aBasePage/eDeletePage"));


const AppConnection = () => {
  // JSX
  return (
    <React.Fragment>
      {/* AppConnection */}
      
      <Helmet><title>Boilerplate Application</title></Helmet>
      <Toaster />

      <Routes>
        <Route element={<GlobalLayout />} >
          <Route element={<UnprotectedLayout />} ></Route>
          <Route element={<ProtectedLayout />} >
            <Route element={<AuthenticatedLayout />} ></Route>
            <Route element={<AuthorizedLayout />} >
              <Route element={<TopbarLayout />} ></Route>
              <Route element={<SidebarLayout />} >
                {/* Base Page */}
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.aSettingRoute.aBaseRoute.aListRoute}`} element={<BaseListPage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.aSettingRoute.aBaseRoute.bCreateRoute}`} element={<BaseCreatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.aSettingRoute.aBaseRoute.cRetrieveRoute}/:id`} element={<BaseRetrievePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.aSettingRoute.aBaseRoute.dUpdateRoute}/:id`} element={<BaseUpdatePage />} />
                <Route path={`${endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.aSettingRoute.aBaseRoute.eDeleteRoute}/:id`} element={<BaseDeletePage />} />
              </Route>
            </Route>
          </Route>
        </Route>
      </Routes>

    </React.Fragment>
  )
}

export default AppConnection;
