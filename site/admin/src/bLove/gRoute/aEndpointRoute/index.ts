const endpointRoute = {
  aGlobalRoute: {
    aUnprotectedRoute: {},
    bProtectedRoute: {
      aAutheticatedRoute: {},
      bAuthorizedRoute: {
        aTopbarRoute: {},
        bSidebarRoute: {
          aSettingRoute: {
            aBaseRoute: {
              aListRoute: "base-list",
              bCreateRoute: "base-create",
              cRetrieveRoute: "base-retrieve",
              dUpdateRoute: "base-update",
              eDeleteRoute: "base-delete",
            }
          }
        }
      }
    }
  },
  zSampleRoute: {}
}

export default endpointRoute;
