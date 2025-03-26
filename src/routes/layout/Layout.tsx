import { Fragment } from "react";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <Fragment>
      {/* <Header /> */}
      <main className="">
        <div className="m-auto">
          <Outlet />
        </div>
      </main>
      {/* <Footer /> */}
    </Fragment>
  );
}

export default Layout;
