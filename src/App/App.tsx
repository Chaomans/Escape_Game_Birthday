import { Route, Routes, useLocation } from "react-router-dom";

//Pages
import Home from "../pages/Home/Home";
import RootLayout from "../layouts/RootLayout/RootLayout";
import NotFound from "../pages/NotFound/NotFound";
import { ProblemModal } from "../components/Problem/ProblemModal";

const App = () => {
  const location = useLocation();
  const background = location.state && location.state.background;
  return (
    <>
      <Routes location={background || location}>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/question/:id" element={<ProblemModal />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      {background && (
        <Routes>
          <Route path="/question/:id" element={<ProblemModal />} />
        </Routes>
      )}
    </>
  );
};

export default App;
