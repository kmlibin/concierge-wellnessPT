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
import ContactScreen from "./screens/Contact/ContactScreen";
import FAQScreen from "./screens/FAQ/FAQScreen";
import NotFoundScreen from "./screens/NotFound/NotFoundScreen";
import PTScreen from "./screens/PT/PTScreen";
import CoachingScreen from "./screens/WellnessCoaching/CoachingScreen";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/about" element={<BioScreen />} />
      <Route path="/contact" element={<ContactScreen />} />
      <Route path="/physicaltherapy" element={<PTScreen />} />
      <Route path="/faq" element={<FAQScreen />} />
      <Route path="/wellnesscoaching" element={<CoachingScreen />} />
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
