
import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router";
import Contact from './components/Contact'
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

const About=lazy(()=> import ('./components/About'))


const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet/>
        </div>
    )
}

// lazyLoading

const appRouter=createBrowserRouter([
    {
        path:'/',
        element:<AppLayout/>,
        children:[{
            path:'/',
            element:<Body/>
        },
        {
            path:'/about',
            element:<Suspense fallback={<h1>Loading...</h1>}>
                <About/>
            </Suspense>
        },
        {
            path:'/contact',
            element:<Contact/>
        },
        {
            path:'/restuarant/:resId',
            element:<RestaurantMenu/>
        }
    ],
        errorElement:<Error/>
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter}/>)

