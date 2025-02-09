import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LineLoadingComponent from "../components/LineLoadingComponent";

const HomePage = lazy(() => import("../pages/HomePage"));

export default function MapRoutes() {
  return (
    <Router>
      <Suspense fallback={<LineLoadingComponent />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<>404</>} />
        </Routes>
      </Suspense>
    </Router>
  );
}
