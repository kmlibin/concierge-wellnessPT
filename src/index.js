import React from "react";

//rrd
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

//styles
import "./index.scss";

//components
import App from "./App";
import HomeScreen from "./screens/Home/HomeScreen";
import BioScreen from "./screens/Bio/BioScreen";
import MyStoryScreen from "./screens/Story/MyStoryScreen";
import ContactScreen from "./screens/Contact/ContactScreen";
import ServicesScreen from "./screens/Services/ServicesScreen";
import FAQScreen from "./screens/FAQ/FAQScreen";
import NotFoundScreen from "./screens/NotFound/NotFoundScreen";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/about" element={<BioScreen />} />
      <Route path="/mystory" element={<MyStoryScreen />} />
      <Route path="/contact" element={<ContactScreen />} />
      <Route path="/services" element={<ServicesScreen />} />
      <Route path="/faq" element={<FAQScreen />} />
      <Route path ="*" element={<NotFoundScreen />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
