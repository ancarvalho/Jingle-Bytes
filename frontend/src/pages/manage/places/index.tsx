import { useState } from "react"

import { useGlobal } from "../../../contexts/global_context"
import { ManageOptions } from "../../../components/manage_options"
import CreateOrUpdatePlace from "../../../components/modals/create_or_update_place"
import PlaceCard from "../../../components/cards/place_card"


export default function ManagePlaces() {
  const [showCreatePlaceModal, setShowCreatePlaceModal] = useState(false)

  const { places, isLoading } = useGlobal()

  return (

    <div className="min-h-[88vh] flex flex-col items-center bg-[rgb(215,215,215)] dark:bg-slate-700">
      <CreateOrUpdatePlace isOpen={showCreatePlaceModal} setIsOpen={setShowCreatePlaceModal} place={undefined} />
      <ManageOptions/>
      <div className="flex justify-between items-center w-full px-8">

        <div className="text-start text-2xl font-bold text-black dark:text-white pt-2">
          Locais
        </div>
        <button
          className="text-3xl dark:text-white bg-white dark:bg-black rounded-full bg-opacity-10 dark:bg-opacity-40 px-2"
          onClick={() => setShowCreatePlaceModal(true)}>
          +
        </button>

      </ div>

      <div className="">

      {
          isLoading
            ? <>Loading ...</>
            : (
              <div className="flex gap-2 flex-wrap items-center justify-center">
                {places.map((p) => <PlaceCard place={p} key={p.id} />)}
              </div>
            )
        }
      </div>

      {/* <div className="">
        Carregar Mais
      </div> */}
    </div>
  )
}