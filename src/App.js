import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import LoginPage from "./routes/LoginPage";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
