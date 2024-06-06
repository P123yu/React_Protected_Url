import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function Protected() {
  let auth = true;
  return <div>{auth ? <Outlet /> : <Navigate to={"/c"} />}</div>;
}
export default Protected;
