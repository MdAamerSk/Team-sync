import React from "react";

import { Outlet } from "react-router";

const DashboardLayout = () => {
  

  return  (
  <div>
    <h1>this is fpr nav</h1>
    <Outlet />
    </div>)
};

export default DashboardLayout;