import { useCallback, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { decodeQueryParams, encodeQueryParams } from "../utils/parse_search_params";


export function useQueryParams<T extends Object>(): [T | undefined, (newQuery: T) => void] {

  let [searchParams, setSearchParams] = useSearchParams();
  const [urlParams, setUrlParams] = useState<T | undefined>(decodeQueryParams(searchParams))


  let setValue = useCallback(
    (newValue?: T) => {
      if (newValue) {
        setSearchParams(encodeQueryParams<T>(newValue));
      }
      setUrlParams(newValue)
    },
    [searchParams, setSearchParams]
  );

  return [urlParams, setValue];
}