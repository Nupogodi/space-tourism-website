import React from "react";
import { Home, Destination, Crew, Technology } from "pages";

export const ROUTES = {
  home: {
    title: "Home",
    url: "/",
    element: <Home />,
  },
  destination: {
    title: "Destination",
    url: "/destination",
    element: <Destination />,
  },
  crew: {
    title: "Crew",
    url: "/crew",
    element: <Crew />,
  },
  technology: {
    title: "Technology",
    url: "/technology",
    element: <Technology />,
  },
};
