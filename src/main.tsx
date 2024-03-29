import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "../services/PrivateRoute";
import MyFormsPage from "./pages/MyFormsPage";
import App from "./App";
import RegisterPage from "./pages/RegisterPage";
import NewForm from "./pages/NewForm";
import EditForm from "./pages/EditForm";



const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute element={<App/>}/>,
    children:[
      {
        path: "/forms",
        element:  <PrivateRoute element={<MyFormsPage/>}/>
        

      },
      {
        path: "/new",
        element: <PrivateRoute element={<NewForm/>}/>

      },
      {
        path: "/edit/:id",
        element: <PrivateRoute element={<EditForm/>}/>
      }
    ]
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path:"/register",
    element: <RegisterPage/>
  }

]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
