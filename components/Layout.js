import { Fragment } from "react";
import Navbar from './Navbar';

const Layout = ({children }) => {
  return (
    <Fragment>
      <Navbar />
      <div class="content">
        {children}
      </div>
    </Fragment>
  );
};

export default Layout;
