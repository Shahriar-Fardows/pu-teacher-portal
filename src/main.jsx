import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import "./index.css";
import Routers from './Routers/Routers.jsx';
import { HelmetProvider } from 'react-helmet-async';



createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <StrictMode>
      <RouterProvider router={Routers} />
    </StrictMode>
  </HelmetProvider>,
)
