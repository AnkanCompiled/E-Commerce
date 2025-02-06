import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingComponent from "../components/LoadingComponent";

const HomePage = lazy(() => import("../pages/HomePage"));

export default function MapRoutes() {
  return (
    <Router>
      <Suspense fallback={<LoadingComponent />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<>404</>} />
        </Routes>
      </Suspense>
    </Router>
  );
}
