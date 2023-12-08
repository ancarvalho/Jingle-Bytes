import { ReactNode, createContext, useContext, useEffect, useState } from "react";

import { httpClient } from "../client/axios";
import { GenericResponse } from "../types/generic_response";
import { Category } from "../types/category";
import { Place } from "../types/place";

type GlobalProps = {
  children: ReactNode;  
}

interface GlobalContextType {
  categories: Category[]
  isLoading: boolean;
  places: Place[]
}

export const GlobalContext = createContext({} as GlobalContextType);



export const GlobalContextProvider = ({ children }: GlobalProps) => {

  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [categories, setCategories] = useState<Category[]>([])
  const [places, setPlaces] = useState<Place[]>([])


  useEffect(() => {
    // getAllEvents()
    setIsLoading(true)
    Promise.all([
      httpClient.get<GenericResponse<Category[]>>("/category/all").then(({ data }) => setCategories(data.data)),
      httpClient.get<GenericResponse<Place[]>>("/place/all").then(({ data }) => setPlaces(data.data)),


    ]).then(() => {
      setIsLoading(false)
    }).catch((e) => console.error(e)) 

  }, [])

  return (
    <GlobalContext.Provider
      value={{
        places,
        categories,
        isLoading
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}


export const useGlobal = () => {
  return useContext(GlobalContext);
}
