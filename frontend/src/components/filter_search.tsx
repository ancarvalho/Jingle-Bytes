import { Popover, Transition } from '@headlessui/react'

import { Fragment, useState } from 'react'
import DatePicker from "tailwind-datepicker-react"
import { IOptions } from "tailwind-datepicker-react/types/Options"

const options: IOptions = {
  autoHide: true,
  todayBtn: true,
  clearBtn: true,
  inputDateFormatProp: {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  },
  theme: {
    background: "",
    todayBtn: "",
    clearBtn: "",
    icons: "",
    text: "",
    disabledText: "",
    input: "",
    inputIcon: "",
    selected: "",
  },
}

// const options : IOptions = {
// 	title: "Demo Title",
// 	autoHide: true,
// 	todayBtn: false,
// 	clearBtn: true,
// 	clearBtnText: "Clear",
// 	maxDate: new Date("2030-01-01"),
// 	minDate: new Date("1950-01-01"),
// 	theme: {
// 		background: "bg-gray-700 dark:bg-gray-800",
// 		todayBtn: "",
// 		clearBtn: "",
// 		icons: "",
// 		text: "",
// 		disabledText: "bg-red-500",
// 		input: "",
// 		inputIcon: "",
// 		selected: "",
// 	},
// 	icons: {
// 		// () => ReactElement | JSX.Element
// 		prev: () => <span>Previous</span>,
// 		next: () => <span>Next</span>,
// 	},
// 	datepickerClassNames: "top-12",
// 	defaultDate: new Date("2022-01-01"),
// 	language: "en",
// 	disabledDates: [],
// 	weekDays: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
// 	inputNameProp: "date",
// 	inputIdProp: "date",
// 	inputPlaceholderProp: "Select Date",
// 	inputDateFormatProp: {
// 		day: "numeric",
// 		month: "long",
// 		year: "numeric"
// 	}
// } 


export default function Example() {

  const [show, setShow] = useState<boolean>(false)
	const handleChange = (selectedDate: Date) => {
		console.log(selectedDate)
	}
	const handleClose = (state: boolean) => {
		setShow(state)
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
                    <form>
                      <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                          </svg>
                        </div>
                        <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Pesquise por eventos" />
                        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                      </div>
                      {/* </form> */}
                      <div className="flex justify-between">

                        <DatePicker show={show} setShow={(state) => setShow(state)} options={options} classNames="absolute w-32 z-50" />
                        <span className="mx-4 text-gray-500">to</span>
                        <DatePicker show={show} setShow={(state) => setShow(state)} options={options} classNames="absolute w-32 z-50" />
                       </div>

                      <label htmlFor="categories" className="pt-2 block text-sm font-medium text-gray-900 dark:text-white">Categoria</label>
                      <select id="categories" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Escolha uma categoria</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                      </select>

                      <label htmlFor="places" className="pt-2 block text-sm font-medium text-gray-900 dark:text-white">Local</label>
                      <select id="places" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Escolha uma Local</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                      </select>

                      <div  className="flex items-center pt-3 w-full">
                        {/* <div className="relative">
                          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                            </svg>
                          </div>
                          <input name="start" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date start" />
                        </div> */}
                        
                       
                       
                        {/* <div className="relative">
                          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                            </svg>
                          </div>
                          <input name="end" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date end" />
                        </div> */}
                      </div>

                    </form>
                  </div>
                  {/* <div className="bg-gray-50 p-4">
                    <a
                      href="##"
                      className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50"
                    >
                      <span className="flex items-center">
                        <span className="text-sm font-medium text-gray-900">
                          Documentation
                        </span>
                      </span>
                      <span className="block text-sm text-gray-500">
                        Start integrating products and tools
                      </span>
                    </a>
                  </div> */}
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
