import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './components/Root/Root';

import Home from './pages/Home/Home';
import Statistics from './pages/statistics/Statistics'
import Errorpage from './components/Error Page/Errorpage';
import Dashboard from './pages/Dashboard/Dashboard';
import News from './pages/News/News';
import GadgetDetail from './components/GadgetDetail/GadgetDetail';
import Gadgets from './components/Gadgets/Gadgets';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children:[
      {
        path: '/',
        element: <Home></Home>,
        children: [     
          {
            path: '/',
            element: <Gadgets></Gadgets>,
            loader: () =>fetch('../gadgets.json')
          },
          {
            path: '/category/:category',
            element: <Gadgets></Gadgets>,
            loader: () =>fetch('../gadgets.json')
          }

        ]
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
      },
      {
        path: '/news',
        element: <News></News>
      },
      {
        path: 'gadgets/:product_id',
        element: <GadgetDetail></GadgetDetail>,
        loader: ()=> fetch('/gadgets.json')
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
