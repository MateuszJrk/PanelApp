import { Folder, Home } from "react-feather";

// import Boxed from "../pages/layouts/Boxed";
// import SidebarCollapsed from "../pages/layouts/SidebarCollapsed";
// import SidebarSticky from "../pages/layouts/SidebarSticky";
// import ThemeClassic from "../pages/layouts/ThemeClassic";
// import ThemeCorporate from "../pages/layouts/ThemeCorporate";
// import ThemeModern from "../pages/layouts/ThemeModern";

// Routes

const dashboardRoutes = {
  path: "/dashboard",
  name: "Dashboard",
  icon: Folder,

  children: [
    {
      path: "/dashboard/default",
      name: "Test"
    },
    {
      path: "/dashboard/analytics",
      name: "Test"
    },
    {
      path: "/dashboard/e-commerce",
      name: "Test"
    }
  ]
};

const pageRoutes = {
  path: "/pages",
  name: "Catalogs",
  icon: Home,
  children: [
    {
      path: "/pages/profile",
      name: "Test"
    }
  ]
};

// const layoutRoutes = {
//   path: "/layouts",
//   name: "Theme Settings",
//   icon: Monitor,
//   children: [
//     {
//       path: "/layouts/sidebar-sticky",
//       name: "Sticky Sidebar",
//       component: SidebarSticky
//     },
//     {
//       path: "/layouts/sidebar-collapsed",
//       name: "Sidebar Collapsed",
//       component: SidebarCollapsed
//     },
//     {
//       path: "/layouts/boxed",
//       name: "Boxed Layout",
//       component: Boxed
//     },
//     {
//       path: "/layouts/theme-classic",
//       name: "Classic Theme",
//       component: ThemeClassic
//     },
//     {
//       path: "/layouts/theme-corporate",
//       name: "Corporate Theme",
//       component: ThemeCorporate
//     },
//     {
//       path: "/layouts/theme-modern",
//       name: "Modern Theme",
//       component: ThemeModern
//     }
//   ]
// };

// Dashboard specific routes
export const dashboard = [dashboardRoutes, pageRoutes];

// Landing specific routes

// All routes
export default [dashboardRoutes, pageRoutes];
