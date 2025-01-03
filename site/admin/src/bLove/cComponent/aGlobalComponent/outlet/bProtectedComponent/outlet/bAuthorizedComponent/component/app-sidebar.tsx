import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Drum,
  Frame,
  GalleryVerticalEnd,
  List,
  Map,
  PieChart,
  Settings2,
  SettingsIcon,
  SquareTerminal
} from "lucide-react"
import * as React from "react"

import { NavMain } from "./nav-main"
// import { NavProjects } from "./nav-projects"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/aConnection/bShadcnConnection/components/ui/sidebar"
import fullRoute from "@/bLove/gRoute/bFullRoute"
import { NavUser } from "./nav-user"
import { TeamSwitcher } from "./team-switcher"

// This is sample data.
const data = {
  user: {
    name: "Shraddha Kapoor",
    email: "shraddha.kapoor@boilerplate.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Boilerplate Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Boilerplate Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Boilerplate Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Playground",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Models",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  mainNav: [
    {
      title: "Setting",
      url: "#",
      icon: SettingsIcon,
      isActive: true,
      items: [
        {
          title: "Base",
          url: fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizedRoute.bSidebarRoute.aSettingRoute.aBaseRoute.aListRoute,
        },
      ],
    },
  ],
  componentNav: [
    {
      title: "Dashboards",
      url: "#",
      icon: Frame,
      isActive: false,
      items: [
        {
          title: "Dashboard 1",
          url: "/",
        },
      ],
    },
    {
      title: "Charts",
      url: "#",
      icon: PieChart,
      isActive: false,
      items: [
        {
          title: "Area Chart",
          url: "/area-chart",
        },
        {
          title: "Bar Chart",
          url: "/bar-chart",
        },
        {
          title: "Line Chart",
          url: "/line-chart",
        },
        {
          title: "Pie Chart",
          url: "/pie-chart",
        },
        {
          title: "Radar Chart",
          url: "/radar-chart",
        },
        {
          title: "Radial Chart",
          url: "/radial-chart",
        },
        {
          title: "Tooltip",
          url: "/tooltip",
        },
      ],
    },
    {
      title: "Data Tables",
      url: "#",
      icon: List,
      isActive: false,
      items: [
        {
          title: "Data Table One",
          url: "/data-table-one",
        },
      ],
    },
    {
      title: "Data Forms",
      url: "#",
      icon: Drum,
      isActive: false,
      items: [
        {
          title: "Data Form One",
          url: "/data-form-one",
        },
      ],
    },
    {
      title: "Basic",
      url: "#",
      icon: BookOpen,
      isActive: false,
      items: [
        {
          title: "Loader",
          url: "/loader",
        },
        {
          title: "Page Not Found",
          url: "/page-not-found",
        },
        {
          title: "No Internet Connection",
          url: "/no-internet-connection",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain header="Main" items={data.mainNav} />
        <NavMain header="Components" items={data.componentNav} />
        {/* <NavMain items={data.navMain} /> */}
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
