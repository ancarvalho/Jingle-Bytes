// import { } from "@headlessui/react"
import { Link } from "react-router-dom"
import EventCard from "../components/event_card"
import { Event } from "../types/event"
import { routes } from "../utils/routes"

export default function Home() {


	const newEvent = {
		name: "Tomorrowland 2023",
		description: "The Biggest Electronic Music Festival",
		date: new Date("2023/12/20")
	} as Event

	return (
		<div className="min-h-screen dark:bg-slate-700 ">
			<section className="dark:bg-slate-700 ">
				<div className="relative bg-[url('assets/background.jpg')] bg-no-repeat bg-cover bg-center h-[300px] bg-opacity-90 " >
					<div className="absolute bottom-0 left-0">
						<p className="pl-2 text-2xl font-bold bg-opacity-90 bg-slate-700 dark:text-white">
							Os Eventos mais esperados do ano
						</p>
					</div>

				</div>
			</section>

			<section className="dark:bg-slate-700 pt-6">


				<div className="flex justify-between items-center py-2 px-8 w-full">
					<div className="text-xl font-bold dark:text-white">
						Próximos Eventos
					</div>
					<Link to={routes.events.route} >
						<div className="text-md font-medium dark:text-white">
							ver todos
						</div>
					</Link>
				</div>

				<div className="flex flex-wrap justify-center gap-2 p-2">
					<EventCard {...newEvent} />
					<EventCard {...newEvent} />
					<EventCard {...newEvent} />
					<EventCard {...newEvent} />
					{/* <EventCard {...newEvent} /> */}

				</div>

			</section>

		</div>
	)
}