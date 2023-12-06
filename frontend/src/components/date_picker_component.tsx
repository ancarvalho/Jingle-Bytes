import { useState } from "react"
import DatePicker from "tailwind-datepicker-react"
import { IOptions } from "tailwind-datepicker-react/types/Options"

type DatePickerComponentType = {
  classExtend: string | null
  value: Date | undefined
}

export default function DatePickerComponent({classExtend, value}: DatePickerComponentType) {


  const [showDate, setShowDate] = useState<boolean>(false)




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


  return (
    
      <DatePicker show={showDate} setShow={(state) => setShowDate(state)} value={value} options={options} classNames={`${classExtend}`} />
    
  )
}