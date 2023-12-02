import EventCard from "../../components/event_card"
import { Event } from "../../types/event"

const newEvent = {
  name: "Tomorrowland 2023",
  description: "The Biggest Electronic Music Festival",
  date: new Date("2023/12/20")
} as Event


export default function Events() {
  return (
    <>
      <div className="">

      </div>

      <div className="">
        <div className="flex flex-wrap justify-center gap-2 p-2">
          <EventCard {...newEvent} />
          <EventCard {...newEvent} />
          <EventCard {...newEvent} />
          <EventCard {...newEvent} />
          {/* <EventCard {...newEvent} /> */}

        </div>
      </div>

      <div className="">

        Carregar Mais
      </div>
    </>
  )
}