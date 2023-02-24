import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import LoginPage from "./routes/LoginPage";
import Home from "./routes/Home";
import ProfilePage from './routes/ProfilePage';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />
    },
    {
      path: "/home",
      element: <Home />
    },
    {
      path: "/profile",
      element: <ProfilePage />
    }
  ]);

  return <RouterProvider router={router} />;
}
export default App;
