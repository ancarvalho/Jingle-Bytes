import { Link } from "react-router-dom"
import { routes } from "../utils/routes"

export function ManageOptions() {
  const manageOptions = [routes.manage_events, routes.manage_categories, routes.manage_places]

  return (
    <div className="flex flex-row gap-2 p-2 overflow-hidden">

      {
        manageOptions.map((o) => (
          <OptionsCard name={o.name} route={o.route} />
        ))
      }
    </div>
  )
}


type OptionCardProps = {
  name: string
  route: string
}

function OptionsCard({ name, route }: OptionCardProps) {
  return (
    <Link to={route}>
      <div className="text-lg dark:text-white text-black bg-slate-500 p-2 rounded-lg overflow-clip">
        {name}
      </div>
    </Link>
  )
}