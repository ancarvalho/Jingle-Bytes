import { useState } from "react"
import { Event } from "../../types/event"
import { CalendarIcon, EditIcon, TrashIcon, WatchIcon } from "../../utils/icons"
import DeleteDialog from "../modals/delete_event_dialog"
import AddOrUpdateEventModal from "../modals/add_or_update_event"
import { httpClient } from "../../client/axios"
import { useSearch } from "../../contexts/search_global"



type EventCardProps = {
  event: Event,
  editing?: boolean | undefined,

}


export default function EventCard({ event, editing }: EventCardProps) {



  const [deleteShow, setDeleteShow] = useState(false)
  const [updateShow, setUpdateShow] = useState(false)

    const {load} = useSearch()

  async function handle_delete(id: string) {
    await httpClient.delete("/event/" + id)
    load()
    setDeleteShow(false)
  }


  return (
    <>

      <div className="relative dark:bg-slate-800 min-w-[330px] max-w-[360px] min-h-[360px] max-h-[380px] bg-[url('/background.jpg')] bg-no-repeat bg-cover bg-center rounded-lg">

        {
          editing && <div className="flex justify-between p-4">
            <DeleteDialog handle_delete={() => handle_delete(event.id!)} isOpen={deleteShow} setIsOpen={setDeleteShow} />
            <button onClick={() => setDeleteShow(true)} className="bg-white dark:bg-black rounded-full bg-opacity-10 dark:bg-opacity-40 p-2">
              <TrashIcon />
            </button>
            <AddOrUpdateEventModal event={event} isOpen={updateShow} setIsOpen={setUpdateShow} />
            <button onClick={() => setUpdateShow(true)} className="bg-white dark:bg-black rounded-full bg-opacity-10 dark:bg-opacity-40 p-2">
              <EditIcon />
            </button>
          </div>
        }


        <div className=" absolute bottom-2 w-full ">
          <div className="flex flex-col justify-center w-full bg-slate-200 dark:bg-slate-800">
            <div className="flex justify-center text-xl font-bold pt-2 pb-2 dark:text-white">
              {event.name}
            </div>
            <div className="flex justify-center pb-3 dark:text-white px-2 text-center text-clip text-sm">
              {event.description}
            </div>

            <div className="flex gap-5 justify-center pb-1">
              <div className="flex gap-2 items-center">
                <CalendarIcon />
                <div className="text-base dark:text-white">
                  {event.date.toLocaleDateString()}
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <WatchIcon />
                <div className="text-base dark:text-white">
                  {event.date.toLocaleTimeString()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


