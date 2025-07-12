import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/context/authentication";
import { Loading } from "@/components/ui/loading";
import Header from "@/components/common/header";

const PrivateRoute: React.FC = () => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <Loading fullScreen message="Carregando..." />
      </div>
    );
  }
  return isAuthenticated ? (
    <>
      <Header />
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
