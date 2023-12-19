import { useState } from "react"

import ManageEventCard from "../../../components/cards/event_card"
import AddOrUpdateEventModal from "../../../components/modals/add_or_update_event"
import { useSearch } from "../../../contexts/search_global"
import FilterSearch from "../../../components/modals/filter_search"
import { ManageOptions } from "../../../components/manage_options"


export default function ManageEvents() {
  const [showEventCreateDialog, setShowEventCreateDialog] = useState(false)

  const { events, isLoading } = useSearch()

  return (

    <div className="min-h-[88vh] flex flex-col items-center bg-[rgb(215,215,215)] dark:bg-slate-700">

      <ManageOptions/>

      <AddOrUpdateEventModal isOpen={showEventCreateDialog} setIsOpen={setShowEventCreateDialog} event={undefined} />
      <div className="flex justify-between items-center w-full px-8">

        <div className="text-start text-2xl font-bold text-black dark:text-white pt-2">
          Meus Eventos
        </div>
        <button
          className="text-3xl dark:text-white bg-white dark:bg-black rounded-full bg-opacity-10 dark:bg-opacity-40 px-2"
          onClick={() => setShowEventCreateDialog(true)}>
          +
        </button>

      </ div>

      <div className="">
        <FilterSearch />
        <div className="flex flex-wrap justify-center gap-2 p-2">
          {isLoading ? <>Loading ...</> : events.map((e) => (
            <ManageEventCard key={e.id} event={e} editing={true} />
          ))}


        </div>
      </div>

      {/* <div className="">
        Carregar Mais
      </div> */}
    </div>
  )
}