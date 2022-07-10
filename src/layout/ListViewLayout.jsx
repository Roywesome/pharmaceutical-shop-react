import React from "react";
import { Outlet } from "react-router-dom";

const ListViewLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default ListViewLayout;
