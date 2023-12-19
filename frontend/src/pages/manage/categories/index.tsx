import { useState } from "react"


import { useGlobal } from "../../../contexts/global_context"
import { ManageOptions } from "../../../components/manage_options"
import CreateOrUpdateCategory from "../../../components/modals/create_or_update_category"
import CategoryCard from "../../../components/cards/caregory_card"


export default function ManageCategories() {
  const [showCreateCategoryModal, setShowCreateCategoryModal] = useState(false)

  const { categories, isLoading } = useGlobal()

  return (

    <div className="min-h-[88vh] flex flex-col items-center bg-[rgb(215,215,215)] dark:bg-slate-700">
      <ManageOptions />
      <CreateOrUpdateCategory isOpen={showCreateCategoryModal} setIsOpen={setShowCreateCategoryModal} />
      <div className="flex justify-between items-center w-full px-8">

        <div className="text-start text-2xl font-bold text-black dark:text-white pt-2">
          Categorias
        </div>
        <button
          className="text-3xl dark:text-white bg-white dark:bg-black rounded-full bg-opacity-10 dark:bg-opacity-40 px-2"
          onClick={() => setShowCreateCategoryModal(true)}>
          +
        </button>

      </ div>

      <div className="">

        {
          isLoading
            ? <>Loading ...</>
            : (
              <div className="flex gap-2 flex-wrap items-center justify-center">
                {categories.map((c) => <CategoryCard category={c} key={c.id} />)}
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