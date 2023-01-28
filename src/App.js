import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import LoginPage from "./routes/LoginPage";
import Home from "./routes/Home";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />
    },
    {
      path: "/home",
      element: <Home />
    }
  ]);

  return <RouterProvider router={router} />;
}
export default App;
