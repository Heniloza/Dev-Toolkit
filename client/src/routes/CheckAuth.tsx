import { useEffect, type ReactNode } from "react";
import { useAuthStore } from "../store/authStore";

function CheckAuth({ children }: { children: ReactNode }) {
  const checkAuth = useAuthStore((state) => state.checkAuth);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  console.log(location.pathname);

  useEffect(() => {
    checkAuth();
  }, [isAuthenticated, checkAuth]);
  return <div>{children}</div>;
}

export default CheckAuth;
