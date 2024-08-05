import { Outlet } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";

const Layout = () => {
  return (
    <Fragment>
      <Outlet />
    </Fragment>
  );
};

export default Layout;
