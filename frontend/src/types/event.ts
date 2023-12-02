import { Category } from "./category"
import { Place } from "./place"

export type Event = {
  name: string,
  description: string | undefined,
  date: Date,
  category: Category | undefined,
  place: Place | undefined
}