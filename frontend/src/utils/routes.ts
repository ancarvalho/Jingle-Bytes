import Home from "../app/index"
import Events from "../app/events"

export const routes = {
  home: { name: "Home", route: "/",  element: () => Home() },
   events :{ name: "Events", route: "/events",  element: () => Events()  },
}