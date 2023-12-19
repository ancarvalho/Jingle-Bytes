import { useState } from "react"
import { Event } from "../../types/event"
import { CalendarIcon, EditIcon, TrashIcon, WatchIcon } from "../../utils/icons"
import DeleteDialog from "../modals/delete_event_dialog"
import AddOrUpdateEventModal from "../modals/add_or_update_event"
import { Place } from "../../types/place"
import CreateOrUpdatePlace from "../modals/create_or_update_place"
import { httpClient } from "../../client/axios"
import { useGlobal } from "../../contexts/global_context"
import { useSearch } from "../../contexts/search_global"



type PlaceCardProps = {
  place: Place,
  // editing?: boolean | undefined,

}


export default function PlaceCard({ place }: PlaceCardProps) {



  const [deleteShow, setDeleteShow] = useState(false)
  const [updateShow, setUpdateShow] = useState(false)
  const {update_places} = useGlobal()



  async function handle_delete(id: string) {
    await httpClient.delete("/place/" + id)
    update_places()
    setDeleteShow(false)
  }


  return (
    <>

      <div className="relative dark:bg-slate-800 min-w-[330px] max-w-[360px] min-h-[360px] max-h-[380px] bg-[url('/background.jpg')] bg-no-repeat bg-cover bg-center rounded-lg">

        <div className="flex justify-between p-4">
          <DeleteDialog handle_delete={() => handle_delete(place.id)} isOpen={deleteShow} setIsOpen={setDeleteShow} />
          <button onClick={() => setDeleteShow(true)} className="bg-white dark:bg-black rounded-full bg-opacity-10 dark:bg-opacity-40 p-2">
            <TrashIcon />
          </button>
          <CreateOrUpdatePlace place={place} isOpen={updateShow} setIsOpen={setUpdateShow} />
          <button onClick={() => setUpdateShow(true)} className="bg-white dark:bg-black rounded-full bg-opacity-10 dark:bg-opacity-40 p-2">
            <EditIcon />
          </button>
        </div>



        <div className=" absolute bottom-2 w-full ">
          <div className="flex flex-col justify-center w-full bg-slate-200 dark:bg-slate-800">
            <div className="flex justify-center items-center text-center text-xl font-bold pt-2 pb-2 dark:text-white">
              {place.name}
            </div>
            <div className="flex justify-center pb-3 dark:text-white px-2 text-center text-clip text-sm">
              Endereço: {place.address}
            </div>
            <div className="flex justify-center pb-3 dark:text-white px-2 text-center text-clip text-sm">
              Cidade: {place.city}
            </div>
            <div className="flex justify-center pb-3 dark:text-white px-2 text-center text-clip text-sm">
              Bairro: {place.neighborhood}
            </div>
            <div className="flex justify-center pb-3 dark:text-white px-2 text-center text-clip text-sm">
              Estado: {place.state}
            </div>
            <div className="flex justify-center pb-3 dark:text-white px-2 text-center text-clip text-sm">
              Pais: {place.country}
            </div>

            <div className="flex gap-5 justify-center pb-1">
              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


