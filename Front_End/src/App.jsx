import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const LandingPage = lazy(() => import("./pages/LandingPage/LandingPage"));
const DashBoardPage = lazy(() =>
  import("./pages/UserPage/Dashboard/DashBoardPage")
);
function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<LandingPage></LandingPage>}></Route>
        <Route
          path="/dashboard"
          element={<DashBoardPage></DashBoardPage>}
        ></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
