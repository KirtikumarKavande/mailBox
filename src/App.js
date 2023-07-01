import { Toaster } from "react-hot-toast";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Root from "./Root";
import Inbox from "./pages/Inbox";
import ComposeMail from "./pages/ComposeMail";
import CompleteMessegeRead from "./pages/CompleteMessegeRead";
import Messages from "./UI/Messages";
import SentMail from "./pages/SentMail";
import SentInboxMail from "./pages/CompleteSentMail";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/Root",
      element: <Root />,
      children: [
        {
          path: "/Root/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/Root/inbox",
          element: <Inbox />,
        }, {
          path: "/Root/composemail",
          element: <ComposeMail/>,
        },
        {
          path: "/Root/message",
          element: <CompleteMessegeRead/>,
        },
        {
          path: "/Root/message/:id",
          element: <CompleteMessegeRead/>,
        },
        {
          path: "/Root/sentMessages",
          element: <SentMail/>,
        },
        {
          path: "/Root/sentInbox/:id",
          element: <SentInboxMail/>,
        },
        
      ],
    },
    {
      path: "/signup",
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
