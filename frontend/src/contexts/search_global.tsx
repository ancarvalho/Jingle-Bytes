import { ReactNode, createContext, useContext, useEffect, useState } from "react";

import { FilterProps } from "../types/filter";
import { httpClient } from "../client/axios";
import { GenericResponse } from "../types/generic_response";
import { encodeQueryParamsToRequest } from "../utils/parse_search_params";
import { transformEvents } from "../utils/transform_events";
import { Event } from "../types/event";


type SearchProps = {
	children: ReactNode;
	mountQueryParams : [filters: FilterProps | undefined, setFiltersParams: (newQuery?: FilterProps) => void]
}

interface SearchContextType {
	events: Event[];
	nFilters: FilterProps | undefined;
	load: () => void
	setFiltersParams: (newValue?: FilterProps) => void
	filterEvents: () => void;
	isLoading: boolean;
}

export const SearchContext = createContext({} as SearchContextType);



export const SearchContextProvider = ({ children, mountQueryParams }: SearchProps) => {

	const [isLoading, setIsLoading] = useState<boolean>(true)
	const [events, setEvents] = useState<Event[]>([] as Event[])
	const [filters, setFiltersParams] = mountQueryParams;


	async function filterEvents() {
		if (filters) {
			setIsLoading(true)
			await httpClient
				.get<GenericResponse<Event[]>>("/event/find?" + encodeQueryParamsToRequest(filters))
				.then(({ data }) => setEvents(transformEvents(data.data)))
				.then(() => setIsLoading(false))
				.catch((e) => console.error(e))
		}
	}

	async function getAllEvents() {
		setIsLoading(true)
		await httpClient.get<GenericResponse<Event[]>>("/event/all")
			.then(({ data }) => setEvents(transformEvents(data.data)))
			.then(() => setIsLoading(false))
			.catch((e) => console.error(e))
	}


	function load() {
		console.log("loading")
		if (filters) {
			filterEvents()
		} else {
			getAllEvents()
		}
	}

	useEffect(load, [filters])


	return (
		<SearchContext.Provider
			value={{
				nFilters: filters,
				setFiltersParams,
				load,
				events,
				filterEvents,
				isLoading
			}}
		>
			{children}
		</SearchContext.Provider>
	)
}


export const useSearch = () => {
	return useContext(SearchContext);
}
