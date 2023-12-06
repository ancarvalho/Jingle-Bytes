import EventCard from "../../components/event_card"
import Example from "../../components/filter_search"
import { Event } from "../../types/event"

const newEvent = {
  name: "Tomorrowland 2023",
  description: "The Biggest Electronic Music Festival",
  date: new Date("2023/12/20")
} as Event


export default function Events() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-slate-300 dark:bg-slate-700">
      <div className="flex text-start text-2xl font-bold text-black dark:text-white pt-2">
        Próximos Eventos
      </div>

      <div className="">
        <Example/>
        <div className="flex flex-wrap justify-center gap-2 p-2">
          <EventCard {...newEvent} />
          <EventCard {...newEvent} />
          <EventCard {...newEvent} />
          <EventCard {...newEvent} />
          {/* <EventCard {...newEvent} /> */}

        </div>
      </div>

      {/* <div className="">
        Carregar Mais
      </div> */}
    </div>
  )
}