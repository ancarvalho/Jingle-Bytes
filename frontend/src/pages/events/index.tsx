
import EventCard from "../../components/event_card"
import FilterSearch from "../../components/filter_search"

import { useSearch } from "../../contexts/search_global"

export default function Events() {
	
  const {events, isLoading} = useSearch()

  return (
    <div className="min-h-[88vh] flex flex-col items-center bg-slate-100 dark:bg-slate-700">
      <div className="flex text-start text-2xl font-bold text-black dark:text-white pt-2">
        Próximos Eventos
      </div>

      <div className="">
        <FilterSearch/>
        <div className="flex flex-wrap justify-center gap-2 p-2">

          {
            isLoading ? <>Loading</> : events.map((e) => <EventCard key={e.id} {...e} />)
          }

          {/* {events.map((e) => <EventCard key={e.id} {...e} />)} */}

          {/* <EventCard {...newEvent} /> */}

        </div>
      </div>

      {/* <div className="">
        Carregar Mais
      </div> */}
    </div>
  )
}