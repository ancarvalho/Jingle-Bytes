import React from 'react'
import ReactDOM from 'react-dom/client'

import "./styles/index.css"
import App from './app'
import { BrowserRouter } from 'react-router-dom'
import { SearchContextProvider } from './contexts/search_global'
import { GlobalContextProvider } from './contexts/global_context'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    <GlobalContextProvider>
      <SearchContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SearchContextProvider>
    </GlobalContextProvider>
  </React.StrictMode>,
)
