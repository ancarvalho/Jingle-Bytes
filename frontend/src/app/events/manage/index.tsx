import { useEffect, useState } from "react"
import FilterSearch from "../../../components/filter_search"
import ManageEventCard from "../../../components/manage_event_card"
import { Event } from "../../../types/event"
import AddOrUpdateDialog from "../../../components/add_or_update_event_dialog"
import { httpClient } from "../../../client/axios"
import { Category } from "../../../types/category"
import { Place } from "../../../types/place"
import { transformEvents } from "../../../utils/transform_events"
import { GenericResponse } from "../../../types/generic_response"


export default function ManageEvents() {
  const [createEventShow, setCreateEventShow] = useState(false)


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

    <div className="min-h-screen flex flex-col items-center bg-slate-300 dark:bg-slate-700">
      <AddOrUpdateDialog categories={categories} places={places} isOpen={createEventShow} setIsOpen={setCreateEventShow} event={undefined} />
      <div className="flex justify-between items-center w-full px-8">

        <div className="text-start text-2xl font-bold text-black dark:text-white pt-2">
          Meus Eventos
        </div>
        <button
          className="text-3xl dark:text-white bg-white dark:bg-black rounded-full bg-opacity-10 dark:bg-opacity-40 px-2"
          onClick={() => setCreateEventShow(true)}>
          +
        </button>

      </ div>

      <div className="">
        <FilterSearch  categories={categories} places={places}/>
        <div className="flex flex-wrap justify-center gap-2 p-2">
          {events.map((e) => (
            <ManageEventCard key={e.id} categories={categories} event={e} places={places} />
          ))}

        </div>
      </div>

      {/* <div className="">
        Carregar Mais
      </div> */}
    </div>
  )
}