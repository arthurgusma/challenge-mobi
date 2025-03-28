import { createBrowserRouter } from "react-router";
import HomePage from "./pages/home";
import { NotFound } from "./404";
import ResultPage from "./pages/result";


export const router = createBrowserRouter([
    { path: '/', 
        children: [
        { path: '/', element: <HomePage /> },
        { path: '/resultado', element: <ResultPage /> }
    ]},
    {
        path: '*',
        element: <NotFound />
    }
])