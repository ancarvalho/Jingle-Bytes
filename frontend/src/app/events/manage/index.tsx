import { useState } from "react"
import FilterSearch from "../../../components/filter_search"
import ManageEventCard from "../../../components/manage_event_card"
import AddOrUpdateDialog from "../../../components/dialogs/add_or_update_event_dialog"
import { useSearch } from "../../../contexts/search_global"


export default function ManageEvents() {
  const [showEventCreateDialog, setShowEventCreateDialog] = useState(false)

  const { events, isLoading } = useSearch()

  return (

    <div className="min-h-[88vh] flex flex-col items-center bg-slate-100 dark:bg-slate-700">
      <AddOrUpdateDialog isOpen={showEventCreateDialog} setIsOpen={setShowEventCreateDialog} event={undefined} />
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
            <ManageEventCard key={e.id} event={e} />
          ))}


        </div>
      </div>

      {/* <div className="">
        Carregar Mais
      </div> */}
    </div>
  )
}