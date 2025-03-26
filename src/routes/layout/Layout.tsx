import { Fragment } from "react";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <Fragment>
      {/* <Header /> */}
      <main className="relative min-h-[calc(100vh-203px-96px)] bg-[#eeeeee]">
        <div className="m-auto md:pt-[96px] pt-[44px]">
          <Outlet />
        </div>
      </main>
      {/* <Footer /> */}
    </Fragment>
  );
}

export default Layout;
