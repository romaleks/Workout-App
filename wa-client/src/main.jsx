import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'

import './assets/styles/index.scss'
import Router from './routes/Router'

export const AuthContext = createContext(false)

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContext.Provider value={false}>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </AuthContext.Provider>
  </React.StrictMode>
)
