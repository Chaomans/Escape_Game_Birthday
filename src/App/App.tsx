import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

//Pages
import Home from "../pages/Home/Home";
import RootLayout from "../layouts/RootLayout/RootLayout";
import NotFound from "../pages/NotFound/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  ),
  {
    basename: import.meta.env.PROD ? "/Escape_Game_Birthday/" : "/",
  }
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
