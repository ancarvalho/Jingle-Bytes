import Home from "../app/index"
import Events from "../app/events"
import ManageEvents from "../app/events/manage"

export const routes = {
  home: { name: "Home", route: "/", element: () => Home() },
  events: { name: "Events", route: "/events", element: () => Events() },
  manage_events: { name: "Manage Events", route: "/events/manage", element: () => ManageEvents() },
}