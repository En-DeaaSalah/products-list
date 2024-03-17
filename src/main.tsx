import React from 'react'
import ReactDOM from 'react-dom/client'
import {QueryClient, QueryClientProvider} from 'react-query'
import {router} from "./routes/index";
import {RouterProvider} from "react-router";
import {CookiesProvider} from 'react-cookie';

import './index.css'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <CookiesProvider defaultSetOptions={{path: '/'}}>
                <RouterProvider router={router}/>
            </CookiesProvider>
        </QueryClientProvider>
    </React.StrictMode>,
)
