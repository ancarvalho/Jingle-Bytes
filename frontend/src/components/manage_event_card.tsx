import { useState } from "react"
import { Event } from "../types/event"
import DeleteDialog from "./delete_event_dialog"
import { CalendarIcon, EditIcon, TrashIcon, WatchIcon } from "../utils/icons"
import AddOrUpdateDialog from "./add_or_update_event_dialog"

export default function ManageEventCard(event : Event) {

  const [deleteShow, setDeleteShow] = useState(false)
  const [updateShow, setUpdateShow] = useState(false)

  return (
    <>

      <div className="relative dark:bg-slate-800 min-w-[330px] max-w-[360px] min-h-[360px] max-h-[380px] bg-[url('assets/background.jpg')] bg-no-repeat bg-cover bg-center rounded-lg">
        <div className="flex justify-between p-4">
          <DeleteDialog id={event.id} isOpen={deleteShow} setIsOpen={setDeleteShow} />
          <button onClick={() => setDeleteShow(true)} className="bg-white dark:bg-black rounded-full bg-opacity-10 dark:bg-opacity-40 p-2">
            <TrashIcon />
          </button>
          <AddOrUpdateDialog event={event} isOpen={updateShow} setIsOpen={setUpdateShow} />
          <button onClick={() => setUpdateShow(true)} className="bg-white dark:bg-black rounded-full bg-opacity-10 dark:bg-opacity-40 p-2">
            <EditIcon />
          </button>
        </div>

        <div className=" absolute bottom-2 w-full ">
          <div className="flex flex-col justify-center w-full bg-slate-800">
            <div className="flex justify-center text-xl font-bold pt-2 pb-2 dark:text-white">
              {event.name}
            </div>
            <div className="flex justify-center text-lg pb-3 dark:text-white">
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


