import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../components/SignInUp/page/LoginPage";
import Home from "../components/Home/page/Home";
import ProfilePage from "../components/ProfilePage/page/ProfilePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/:nickname",
    element: <ProfilePage />,
  },
]);
export default router;
