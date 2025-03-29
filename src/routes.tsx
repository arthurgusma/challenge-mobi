import { createBrowserRouter, Navigate } from "react-router";
import SearchPage from "./pages/Search";
import { NotFound } from "./404";
import ResultPage from "./pages/Result";
import Error from "./error";
import { ResultLayout } from "./pages/_layouts/result";

export const router = createBrowserRouter([
    { path: '/',
        children: [{ 
            path: '/',
            element: <Navigate to="/busca" replace />,
        },
        {
            path: '/busca', element: <SearchPage />
        }
    ],
     },
    { path: '/resultado', element: <ResultLayout />,
        children: [{
            path: '/resultado', 
            element: <ResultPage /> 
        }],
    },
    {
        path: '*',
        element: <NotFound />,
        errorElement: <Error />
    }
])