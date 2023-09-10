import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MenuGrid from "./MenuGrid";
import Media from "./pages/Media";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Accolades from "./pages/Accolades";
import Social from "./pages/Social";
import About from "./pages/About";
import Etc from "./pages/Etc";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <MenuGrid />
      },
      {
        path: "/media",
        element: <Media />
      },
      {
        path: "/projects",
        element: <Projects />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/resume",
        element: <Resume />
      },
      {
        path: "/accolades",
        element: <Accolades />
      },
      {
        path: "/social",
        element: <Social />
      },
      {
        path: "/who",
        element: <About />
      },
      {
        path: "/etc",
        element: <Etc />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
