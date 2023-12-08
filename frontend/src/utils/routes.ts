import Home from "../pages/index"
import Events from "../pages/events"
import ManageEvents from "../pages/events/manage"

export const routes = {
  home: { name: "Home", route: "/", element: () => Home() },
  events: { name: "Events", route: "/events", element: () => Events() },
  manage_events: { name: "Manage Events", route: "/events/manage", element: () => ManageEvents() },
}