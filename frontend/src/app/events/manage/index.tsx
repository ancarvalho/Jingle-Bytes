import { useState } from "react"
import Example from "../../../components/filter_search"
import ManageEventCard from "../../../components/manage_event_card"
import { Event } from "../../../types/event"
import AddOrUpdateDialog from "../../../components/add_or_update_event_dialog"

const newEvent = {
  name: "Tomorrowland 2023",
  description: "The Biggest Electronic Music Festival",
  date: new Date("2023/12/20")
} as Event


export default function ManageEvents() {
  const [createEventShow, setCreateEventShow] = useState(false)

  return (

    <div className="min-h-screen flex flex-col items-center bg-slate-300 dark:bg-slate-700">
      <AddOrUpdateDialog isOpen={createEventShow} setIsOpen={setCreateEventShow} event={undefined} />
      <div className="flex justify-between items-center w-full px-8">

        <div className="text-start text-2xl font-bold text-black dark:text-white pt-2">
          Meus Eventos
        </div>
        <button className="text-3xl dark:text-white bg-white dark:bg-black rounded-full bg-opacity-10 dark:bg-opacity-40 px-2" onClick={()=> setCreateEventShow(true)}>
          +
        </button>

      </ div>

      <div className="">
        <Example />
        <div className="flex flex-wrap justify-center gap-2 p-2">
          <ManageEventCard {...newEvent} />
          <ManageEventCard {...newEvent} />
          <ManageEventCard {...newEvent} />
          <ManageEventCard {...newEvent} />
        </div>
      </div>

      {/* <div className="">
        Carregar Mais
      </div> */}
    </div>
  )
}