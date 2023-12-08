import { useCallback, useState } from "react";
import { NavigateOptions, useSearchParams } from "react-router-dom";
import { decodeQueryParams, encodeQueryParams } from "../utils/parse_search_params";

type useQueryParamsProps<T> = {
  setFilters: React.Dispatch<React.SetStateAction<T | undefined>>
}

export function useQueryParams<T extends Object>(): [T | undefined, (newQuery: T, options?: NavigateOptions) => void] {

  let [searchParams, setSearchParams] = useSearchParams();
  const [urlParams, setUrlParams] = useState<T | undefined>(decodeQueryParams(searchParams))


  let setValue = useCallback(
    (newValue: T, options?: NavigateOptions) => {
      setSearchParams(encodeQueryParams<T>(newValue), options);
      setUrlParams(newValue)
      // setFilters(newValue)
    },
    [searchParams, setSearchParams]
  );

  return [urlParams, setValue];
}