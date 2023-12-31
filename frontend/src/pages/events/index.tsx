
import FilterSearch from "../../components/modals/filter_search"
import EventCard from "../../components/cards/event_card"


import { useSearch } from "../../contexts/search_global"

export default function Events() {

  const { events, isLoading } = useSearch()

  return (
    <div className="min-h-[88vh] flex flex-col items-center bg-[rgb(215,215,215)] dark:bg-slate-700">
      <div className="flex text-start text-2xl font-bold text-black dark:text-white pt-2">
        Próximos Eventos
      </div>

      <div className="">
        <FilterSearch />
        <div className="flex flex-wrap justify-center gap-2 p-2">

          {
            isLoading ? <>Loading</> : events.map((e) => <EventCard key={e.id} event={e} />)
          }

        </div>
      </div>

      {/* <div className="">
        Carregar Mais
      </div> */}
    </div>
  )
}