import { Route, Routes } from "react-router-dom";
import Error404 from "../pages/errors/Error404";
import Layout from "./layout/Layout";
import MainPage from "../pages/main/MainPage";

function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<MainPage />} />
      </Route>

      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default Router;
