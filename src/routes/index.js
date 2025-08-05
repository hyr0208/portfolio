import { Route, Routes } from "react-router-dom";
import Error404 from "../pages/errors/Error404";
import Layout from "./layout/Layout";
import MainPage from "../pages/main/MainPage";
import LastPage from "../pages/lastPage/LastPage";

function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<MainPage />} />
      </Route>
      
      <Route path="/last" element={<LastPage />} />

      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default Router;
