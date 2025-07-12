import Header from "@/components/common/header";
import React from "react";
import { Outlet } from "react-router-dom";

const PublicRoute: React.FC = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <Outlet />
    </div>
  );
};

export default PublicRoute;
