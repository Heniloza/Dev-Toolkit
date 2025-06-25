import { type ReactNode } from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }: { children: ReactNode }) {
  const isAuthenticated = false; //useAuthStore(state=>state.isAuthenticated)

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return <div>{children}</div>;
}

export default ProtectedRoute;
