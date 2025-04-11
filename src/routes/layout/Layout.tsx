import { Fragment } from "react";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <Fragment>
      <main className="w-full">
        <Outlet />
      </main>
    </Fragment>
  );
}

export default Layout;
