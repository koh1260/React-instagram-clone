import {
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import GlobalStyle from "./style/globalStyles";
import router from './router/router';

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}
export default App;
