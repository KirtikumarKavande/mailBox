import { Toaster } from "react-hot-toast";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "signup",
      element: <SignUp />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
       <Toaster />
    </>
  );
}
