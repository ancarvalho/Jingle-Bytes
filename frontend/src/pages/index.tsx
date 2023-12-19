import { Link } from "react-router-dom"
import EventCard from "../components/cards/event_card"
import { Event } from "../types/event"
import { routes } from "../utils/routes"
import { useEffect, useState } from "react"
import { httpClient } from "../client/axios"
import { GenericResponse } from "../types/generic_response"
import { transformEvents } from "../utils/transform_events"
import { ArrowRight } from "../utils/icons"

export default function Home() {

	const [isLoading, setIsLoading] = useState<boolean>(false)

	const [events, setEvents] = useState<Event[]>([])

	useEffect(() => {
		setIsLoading(true)
		httpClient.get<GenericResponse<Event[]>>("/event/next")
			.then(({ data }) => setEvents(transformEvents(data.data)))
			.catch((e) => console.error(e))
			.then(() => setIsLoading(false))

	}, [])


	return (
		<div className="min-h-[88vh] dark:bg-slate-700 bg-[rgb(215,215,215)]">
			<section className="">
				<div className="relative bg-[url('/background.jpg')] bg-no-repeat bg-cover bg-center h-[300px] bg-opacity-90 " >
					<div className="absolute bottom-0 left-0">
						<p className="pl-2 text-2xl font-bold dark:bg-opacity-90 bg-opacity-70 bg-slate-300 dark:bg-slate-700 dark:text-white">
							Os Eventos mais esperados do ano
						</p>
					</div>

				</div>
			</section>

			<section className=" dark:bg-slate-700 bg-[rgb(219,215,215)] pt-6">


				<div className="flex justify-between items-center py-2 px-8 w-full ">
					<div className="text-xl font-bold dark:text-white">
						Próximos Eventos
					</div>
					<Link to={routes.events.route} >
						<div className="flex gap-1 items-center text-md font-medium dark:text-white">
							ver todos
							<ArrowRight className="h-5 dark:fill-white fill-black" />
						</div>
					</Link>
				</div>

				<div className="flex flex-wrap justify-center gap-2 p-2 ">
					{isLoading ? <>Loading...</> : events.map((e) => <EventCard key={e.id} event={e} />)}
					{/* {events.map((e) => <EventCard key={e.id} {...e} />)} */}
				</div>

			</section>

		</div>
	)
}