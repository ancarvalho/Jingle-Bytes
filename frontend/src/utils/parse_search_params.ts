import { FilterProps } from "../types/filter";

function encodeQueryParams<T extends Object>(params: T) {

  const urlSearchParams = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value instanceof Date) {
      urlSearchParams.append(key, value.toDateString());
      continue;
    }
    urlSearchParams.append(key, String(value));
  }
  // console.log(urlSearchParams)

  return urlSearchParams
}

function encodeQueryParamsToRequest(filters: FilterProps) {

  const urlSearchParams = new URLSearchParams();
  for (const [key, value] of Object.entries(filters)) {

    urlSearchParams.append(key, String(value));
  }

  return urlSearchParams
}



function decodeQueryParams<T extends Object>(value: URLSearchParams) {

  const params = new URLSearchParams(value);
  const decodedParams: Record<string, string> = {};

  params.forEach((paramValue, paramName) => {
    decodedParams[paramName] = paramValue;
  });


  if ( Object.keys(decodedParams).length > 0) {
    return decodedParams as unknown as T;
  }

  return undefined

}


export { encodeQueryParams, decodeQueryParams, encodeQueryParamsToRequest }