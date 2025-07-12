import React from "react";
import { useAuth } from "../../context/authentication";
import { Button } from "../ui/button";
import { useLocation, useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <header className=" flex justify-between items-center py-5 px-10 bg-primary text-white">
      <h1>Welcome {user?.name}</h1>
      {user && (
        <Button onClick={logout} variant="secondary">
          Logout
        </Button>
      )}
      {!user && (
        <Button
          onClick={() => {
            if (pathname === "/sign-in") navigate("/login");
            else navigate("/sign-in");
          }}
          variant="secondary"
        >
          {pathname === "/sign-in" ? "Login" : "Sign In"}
        </Button>
      )}
    </header>
  );
};

export default Header;
