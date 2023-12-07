import { Event } from "../types/event"
import { CalendarIcon, WatchIcon } from "../utils/icons"

export default function EventCard({ name, description, date }: Event) {
  return (
    <>
      <div className="relative dark:bg-slate-800 min-w-[330px] max-w-[360px] min-h-[360px] max-h-[380px] bg-[url('assets/background.jpg')] bg-no-repeat bg-cover bg-center rounded-lg">
        <div className=" absolute bottom-2 w-full ">
          <div className="flex flex-col justify-center w-full bg-slate-800">
            <div className="flex justify-center text-xl font-bold pt-2 pb-2 dark:text-white">
              {name}
            </div>
            <div className="flex justify-center pb-3 dark:text-white px-2 text-center text-clip text-sm">
              {description}
            </div>

            <div className="flex gap-5 justify-center pb-1">
              <div className="flex gap-2 items-center">
                <CalendarIcon />
                <div className="text-base dark:text-white">
                  {date.toLocaleDateString()}
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <WatchIcon />
                <div className="text-base dark:text-white">
                  {date.toLocaleTimeString()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

