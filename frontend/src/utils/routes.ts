import Home from "../pages/index"
import Events from "../pages/events"
import ManageEvents from "../pages/manage/events"
import ManageCategories from "../pages/manage/categories"
import ManagePlaces from "../pages/manage/places"


// type RoutesProps = {
//   name: String,
//   route: String,
//   element: JSX.Element
// }

export const routes = {
  home: { name: "Home", route: "/", element: () => Home(), hidden: false },
  events: { name: "Events", route: "/events", element: () => Events(), hidden: false },
  manage_events: { name: "Manage Events", route: "/manage/events", element: () => ManageEvents(), hidden: false },
  manage_categories: { name: "Manage Categories", route: "/manage/categories", element: () => ManageCategories(), hidden: true },
  manage_places: { name: "Manage Places", route: "/manage/places", element: () => ManagePlaces(), hidden: true },
}