import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.scss";

import App from "./App";
import HomeScreen from "./screens/HomeScreen";
import BioScreen from "./screens/BioScreen";
import MyStoryScreen from './screens/MyStoryScreen';
import ContactScreen from "./screens/ContactScreen";
import ServicesScreen from "./screens/ServicesScreen";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path ="/meet" element = {<BioScreen />} />
      <Route path ="/mystory" element = {<MyStoryScreen />} />
      <Route path ="/contact" element = {<ContactScreen />} />
      <Route path ="/services" element = {<ServicesScreen />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
