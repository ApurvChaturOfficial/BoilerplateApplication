import fullRoute from "@/bLove/gRoute/bFullRoute";


export const header = {
  title: "Base List",
  subtitle: "This is just some subtitle for the base list",
  buttons: [
    { text: "Create Base", to: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.aSettingRoute.aBaseRoute.bCreateRoute }
  ]
}
