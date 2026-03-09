import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from "react-router";

import App from './App.tsx'
import Home from './components/Home.tsx';
import Shop from './components/Shop.tsx';
import Cart from './components/Cart.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      { index: true, element: <Home/>},
      { path: "home", element: <Home/>},
      { path: "shop", element: <Shop/>},
      { path: "cart", element: <Cart/>}
    ],
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
