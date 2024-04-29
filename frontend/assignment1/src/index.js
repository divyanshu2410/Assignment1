import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import OnboardingForm from "./components/Onboarding/Onboarding";
import UserDashboard from "./components/Dashboard/UserDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import ContactForm from "./components/Support/ContactForm";

const router = createBrowserRouter([

  {
    path: "/",
    element: <App/>
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <Register />
  },
  {
    path: "/onboarding",
    element: <OnboardingForm />
  },
  {
    path: "/userDashboard",
    element: <UserDashboard />
  },
  {
    path: "/adminDashboard",
    element: <AdminDashboard />
  },
  {
    path:"/support",
    element: <ContactForm />
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
