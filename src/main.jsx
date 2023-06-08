import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './Routes/Routes.jsx'
import { RouterProvider } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './providers/AuthProvider'
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      {/* <QueryClientProvider client={QueryClient}> */}
      <HelmetProvider>
        <div className='max-w-screen-xl mx-auto'>
          <RouterProvider router={router} />
        </div>
      </HelmetProvider>
    {/* </QueryClientProvider> */}
    </AuthProvider>
  </React.StrictMode>,
)
