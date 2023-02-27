import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import LoginPage from "./routes/LoginPage";
import Home from "./routes/Home";
import ProfilePage from './routes/ProfilePage';
import GlobalStyle from "./globalStyles";

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
      path: "/:nickname",
      element: <ProfilePage />
    }
  ]);

  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}
export default App;
