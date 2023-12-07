import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { Event } from '../../types/event'
import DatePickerComponent from '../date_picker_component'
import { Category } from '../../types/category'
import { Place } from '../../types/place'
import { httpClient } from '../../client/axios'

type AddOrUpdateDialogProps = {
  event: Event | undefined,
  isOpen: boolean,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  categories: Category[],
  places: Place[]
}


export default function AddOrUpdateDialog({ event, isOpen, setIsOpen, categories, places }: AddOrUpdateDialogProps) {


  const [newEvent, setEvent] = useState<Event>({ ...event } as Event);


  function handle_update_event() {
    console.log(`event ${JSON.stringify(newEvent)}} deleted`)
    if (newEvent.id) {
      return update_event(newEvent)

    }
    create_event(newEvent)
  }


  async function create_event(event: Event) {
    await httpClient.post("/event", { ...event })
  }

  async function update_event(event: Event) {
    await httpClient.patch("/event/" + event.id, { ...event })
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
                  <Dialog.Title
                    className="text-lg font-medium leading-6 text-gray-900 dark:text-white"
                  >
                    Atualizar Evento
                  </Dialog.Title>
                  <div className="w-full max-w-xs">
                    <form className="rounded px-8 pt-6 pb-8 mb-4">
                      <div className="pb-4">
                        <label className="block text-gray-700 dark:text-white text-sm font-bold mb-2" htmlFor="name">
                          Nome
                        </label>
                        <input value={newEvent?.name} onChange={(e) => setEvent((ev) => { return { ...ev, name: e.target.value } as Event })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " id="name" type="text" placeholder="Nome" />
                      </div>
                      <div className="pb-4">
                        <label className="block text-gray-700 dark:text-white text-sm font-bold mb-2" htmlFor="description">
                          Descrição
                        </label>
                        <input value={newEvent?.description} onChange={(e) => setEvent((ev) => { return { ...ev, description: e.target.value } as Event })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="description" type="text" placeholder="Descrição" />
                      </div>
                      <div className="pb-4">
                        <label className="block text-gray-700 dark:text-white text-sm font-bold mb-2" htmlFor="name">
                          Data
                        </label>
                        <DatePickerComponent classExtend={""} onChange={(date) => setEvent((ev) => { return { ...ev, date: date } as Event })} value={newEvent?.date} />
                      </div>
                      <div className="pb-4">
                        <label htmlFor="categories" className="block text-gray-700 dark:text-white text-sm font-bold mb-2">Categoria</label>
                        <select value={newEvent.category_id} onChange={(c) => setEvent((e) => {return {...e, category_id: c.target.value} as Event})} id="categories" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                          <option selected>Escolha uma categoria</option>

                          {categories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
                        </select>
                      </div>
                      <div className="pb-4">
                        <label htmlFor="places" className="block text-gray-700 dark:text-white text-sm font-bold mb-2">Local</label>
                        <select value={newEvent.place_id}  onChange={(p) => setEvent((e) => {return {...e, place_id: p.target.value} as Event})} id="places" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                          <option selected>Escolha uma Local</option>
                          {places.map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}
                        </select>
                      </div>

                    </form>
                  </div>
                  <div className="flex justify-between w-full">
                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        Cancelar
                      </button>
                    </div>
                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={() => {
                          handle_update_event()
                          closeModal()
                        }}
                      >
                        Salvar
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}