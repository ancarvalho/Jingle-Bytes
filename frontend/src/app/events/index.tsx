import { useEffect, useState } from "react"
import EventCard from "../../components/event_card"
import FilterSearch from "../../components/filter_search"
import { Event } from "../../types/event"
import { httpClient } from "../../client/axios"
import { transformEvents } from "../../utils/transform_events"
import { GenericResponse } from "../../types/generic_response"
import { Category } from "../../types/category"
import { Place } from "../../types/place"

export default function Events() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [categories, setCategories] = useState<Category[]>([])
  const [places, setPlaces] = useState<Place[]>([])
  const [events, setEvents] = useState<Event[]>([])



  useEffect(() => {
    setIsLoading(true)
    Promise.all([
      httpClient.get<GenericResponse<Category[]>>("/category/all").then(({ data }) => setCategories(data.data)),
      httpClient.get<GenericResponse<Place[]>>("/place/all").then(({ data }) => setPlaces(data.data)),
      httpClient.get<GenericResponse<Event[]>>("/event/all").then(({ data }) => setEvents(transformEvents(data.data))),

    ]).then(() => {
      setIsLoading(false)
      // console.log(places)
    }).catch((e) => console.error(e))

  }, [])




  if (isLoading) {
    return (
      <>
        Loading...
      </>
    )
  }



  return (
    <div className="min-h-[88vh] flex flex-col items-center bg-slate-300 dark:bg-slate-700">
      <div className="flex text-start text-2xl font-bold text-black dark:text-white pt-2">
        Próximos Eventos
      </div>

      <div className="">
        <FilterSearch categories={categories} places={places}/>
        <div className="flex flex-wrap justify-center gap-2 p-2">

          {events.map((e) => <EventCard key={e.id} {...e} />)}

          {/* <EventCard {...newEvent} /> */}

        </div>
      </div>

      {/* <div className="">
        Carregar Mais
      </div> */}
    </div>
  )
}