import { useState } from "react"
import { CalendarIcon, EditIcon, TrashIcon, WatchIcon } from "../../utils/icons"
import DeleteDialog from "../modals/delete_event_dialog"
import AddOrUpdateEventModal from "../modals/add_or_update_event"
import { Category } from "../../types/category"
import CreateOrUpdateCategory from "../modals/create_or_update_category"
import { httpClient } from "../../client/axios"
import { useGlobal } from "../../contexts/global_context"



type CategoryCardProps = {
  category: Category,
  // editing?: boolean | undefined,

}


export default function CategoryCard({ category }: CategoryCardProps) {



  const [deleteShow, setDeleteShow] = useState(false)
  const [updateShow, setUpdateShow] = useState(false)

  const {update_categories} = useGlobal()


  async function handle_delete(id: string) {
    await httpClient.delete("/category/" + id)
    update_categories()
    setDeleteShow(false)
  }



  return (
    <>

      <div className="relative dark:bg-slate-800 min-w-[330px] max-w-[360px] min-h-[360px] max-h-[380px] bg-[url('/background.jpg')] bg-no-repeat bg-cover bg-center rounded-lg">

        <div className="flex justify-between p-4">
          <DeleteDialog handle_delete={() => handle_delete(category.id)}  isOpen={deleteShow} setIsOpen={setDeleteShow} />
          <button onClick={() => setDeleteShow(true)} className="bg-white dark:bg-black rounded-full bg-opacity-10 dark:bg-opacity-40 p-2">
            <TrashIcon />
          </button>
          <CreateOrUpdateCategory category={category} isOpen={updateShow} setIsOpen={setUpdateShow} />
          <button onClick={() => setUpdateShow(true)} className="bg-white dark:bg-black rounded-full bg-opacity-10 dark:bg-opacity-40 p-2">
            <EditIcon />
          </button>
        </div>
        <div className=" absolute bottom-2 w-full ">
          <div className="flex flex-col justify-center w-full bg-slate-200 dark:bg-slate-800">
            <div className="flex justify-center text-xl font-bold pt-2 pb-2 dark:text-white">
              {category.name}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


