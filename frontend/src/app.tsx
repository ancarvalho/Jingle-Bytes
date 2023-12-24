import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import { routes } from "./utils/routes";
import { SearchContextProvider } from "./contexts/search_global";
import { useQueryParams } from "./contexts/use_query_params";
import { FilterProps } from "./types/filter";


export default function App() {

  return (
    <SearchContextProvider mountQueryParams={useQueryParams<FilterProps>()}>
      <Layout >
        <Routes>
          {Object.values(routes).map((l) => <Route key={l.route} path={l.route} element={<l.element />} />)}
        </Routes>
      </Layout>
    </SearchContextProvider>
  );




}

