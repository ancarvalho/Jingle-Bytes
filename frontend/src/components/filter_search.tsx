import { Popover, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import DatePickerComponent from './date_picker_component'
import { Place } from '../types/place'
import { Category } from '../types/category'
import { useQueryParam } from '../contexts/search_context'
import { FilterProps } from '../types/filter'
import { httpClient } from '../client/axios'
import { encodeQueryParamsToRequest } from '../utils/parse_search_params'
import { GenericResponse } from '../types/generic_response'
import { Event } from '../types/event'



type FilterSearchProps = {
  categories: Category[],
  places: Place[]
}



export default function FilterSearch({ places, categories }: FilterSearchProps) {



  const [events, setEvents] = useState<Event[]>([])
  const [filters, setFilters] = useQueryParam<FilterProps>("")

  console.log(JSON.stringify(filters))


  function filterEvents() {
    if (filters) {
      console.log("/event/find?" + encodeQueryParamsToRequest(filters))
      httpClient.get<GenericResponse<Event[]>>("/event/find?" + encodeQueryParamsToRequest(filters))
        .then(({ data }) => setEvents(data.data)).then(() => console.log(events))

    }
  }


  return (
    <div className="fixed bottom-16 left-[88%] pt-2 w-full max-w-sm px-4 z-10">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? 'text-white' : 'text-white/90'}
                group rounded-md bg-orange-700 px-3 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75`}
            >
              <SearchIcon />

            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-x-1"
              enterTo="opacity-100 translate-x-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-x-0"
              leaveTo="opacity-0 translate-x-1"
            >
              <Popover.Panel className="absolute right-[88%] z-10 w-screen max-w-sm -translate-y-[120%] transform px-4 sm:px-0 ">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5 bg-slate-200 dark:bg-slate-500">
                  <div className="relative flex flex-col gap-2 p-2">
                    {/* <form> */}
                      <div className="pb-4">


                        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>

                        <div className="relative">
                          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <SearchIcon />
                          </div>
                          <input type="search" value={filters?.search} onChange={(e) => setFilters({ ...filters, search: e.target.value } as FilterProps)} className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Pesquise por eventos" />
                          <button 
                          // type="submit"
                          onClick={filterEvents} 
                          className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                        </div>
                      </div>
                      {/* </form> */}
                      <div className="pb-4">
                        <label className="block text-gray-700 dark:text-white text-sm font-bold mb-2" htmlFor="name">
                          Data
                        </label>
                        <div className="flex justify-between items-center ">
                          <DatePickerComponent classExtend={"w-32"} value={filters?.date ? new Date(filters?.date) : undefined} onChange={(date) => setFilters({ ...filters, date: date.toLocaleDateString() } as FilterProps)} />
                          <span className="mx-4 text-gray-500 dark:text-white">ate</span>
                          <DatePickerComponent classExtend={"w-32"} value={filters?.date ? new Date(filters?.date) : undefined} onChange={(date) => setFilters({ ...filters, date: date.toLocaleDateString() } as FilterProps)} />
                        </div>

                      </div>

                      <div className="pb-4">
                        <label htmlFor="categories" className="block text-gray-700 dark:text-white text-sm font-bold mb-2">Categoria</label>
                        <select id="categories" defaultValue={"Escolha uma categoria"} value={filters?.categories} onChange={(v) => setFilters({ ...filters, categories: v.target.value } as FilterProps)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                          <option value={""}>Escolha uma categoria</option>
                          {categories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
                        </select>
                      </div>
                      <div className="pb-4">
                        <label htmlFor="places" className="block text-gray-700 dark:text-white text-sm font-bold mb-2">Local</label>
                        <select id="places" value={filters?.places} onChange={(v) => setFilters({ ...filters, places: v.target.value } as FilterProps)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                          <option value={""}>Escolha uma Local</option>
                          {places.map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}
                        </select>
                      </div>



                    {/* </form> */}
                  </div>
                  
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  )
}

function SearchIcon() {
  return (
    <svg
      className="fill-white w-5"
      viewBox="0 0 24 24">
      <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
      </path>
    </svg>
  )
}


