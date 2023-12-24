import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { routes } from '../utils/routes'
import { SearchIcon } from '../utils/icons'
import { useSearch } from '../contexts/search_global'
import { FilterProps } from '../types/filter'

type SearchModalProps = {
  isOpen: boolean,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}


export default function SearchModal({ isOpen, setIsOpen }: SearchModalProps) {

  const [query, setQuery] = useState<string | undefined>("")
  const navigate = useNavigate()
  const { setFiltersParams } = useSearch()

  async function handle_search(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (query) {
      setFiltersParams({ search: query } as FilterProps)
      navigate(routes.events.route)
      closeModal()
    }
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="flex flex-col items-center w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-slate-800 p-6 text-left align-middle shadow-xl transition-all">

                  <form onSubmit={handle_search}>
                    <div className="relative">
                      <input
                        type="search"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Pesquise por eventos" />
                      <button
                        type="submit"
                        // onClick={handle_search}
                        className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <SearchIcon />
                      </button>
                    </div>
                  </form>


                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}