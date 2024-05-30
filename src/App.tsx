import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Intro from "./components/Intro";

function App() {
  const [shouldShowName, setShouldShowName] = useState(true);
  const appRouter = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/projects", element: <Projects /> },
    { path: "/skills", element: <Skills /> },
    { path: "/contact", element: <Contact /> },
  ]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShouldShowName(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      {shouldShowName ? <Intro /> : <RouterProvider router={appRouter} />}
    </div>
  );
}

export default App;
