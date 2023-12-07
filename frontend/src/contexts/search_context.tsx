import { useCallback, useState } from "react";
import { NavigateOptions, useSearchParams } from "react-router-dom";
import { decodeQueryParams, encodeQueryParams } from "../utils/parse_search_params";

export function useQueryParam<T extends Object>(
  key: string
): [T | undefined, (newQuery: T, options?: NavigateOptions) => void] {

  let [searchParams, setSearchParams] = useSearchParams();
  const [urlParams, setUrlParams] = useState<T>(decodeQueryParams(searchParams) )


  let setValue = useCallback(
    (newValue: T, options?: NavigateOptions) => {
      setSearchParams(encodeQueryParams<T>(newValue), options);
      setUrlParams(newValue)
    },
    [key, searchParams, setSearchParams]
  );

  return [urlParams, setValue];
}