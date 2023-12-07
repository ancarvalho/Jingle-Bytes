import { Event } from "../types/event"

export 	function transformEvents(events: Event[]) {
  return events.map((e) => {
    return { ...e, date: new Date(e.date) } as Event
  })
}