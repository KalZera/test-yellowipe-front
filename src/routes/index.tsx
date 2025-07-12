import { Route, Routes } from "react-router-dom";
import { UserRegister } from "../modules/users/pages/register";
import { UserLogin } from "../modules/users/pages/login";
import { Feed } from "../modules/feed/pages/feed";
import PrivateRoute from "./private-routes";
import PublicRoute from "./public-routes";

export const AppRoutes = () => {
  return (
    <Routes>
      {/* public Routes */}
      <Route element={<PublicRoute />}>
        <Route path="/sign-in" element={<UserRegister />} />
        <Route path="/login" element={<UserLogin />} />
      </Route>
      {/* private Routes */}
      <Route element={<PrivateRoute />}>
        <Route path="/home" element={<Feed />} />
      </Route>
    </Routes>
  );
};
