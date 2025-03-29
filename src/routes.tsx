import { createBrowserRouter, Navigate } from "react-router";
import SearchPage from "./pages/SearchPage";
import { NotFound } from "./404";
import Error from "./error";
import { ResultLayout } from "./pages/_layouts/result";
import ResultsPage from "./pages/ResultsPage";

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
            element: <ResultsPage /> 
        }],
    },
    {
        path: '*',
        element: <NotFound />,
        errorElement: <Error />
    }
])