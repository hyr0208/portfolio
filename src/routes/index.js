import { Route, Routes } from "react-router-dom";
import Error404 from "../pages/errors/Error404";
import Layout from "./layout/Layout";

function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>{/* <Route path="/" element={} /> */}</Route>

      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default Router;
