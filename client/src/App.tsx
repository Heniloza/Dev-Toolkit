import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import VerifyOtp from "./pages/VerifyOtp";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./store/authStore";
import { useEffect } from "react";
import { Loader } from "lucide-react";
import MainLayout from "./components/UI components/MainLayout";
import Snippets from "./pages/Snippets";
import ColorPalette from "./pages/ColorPalette";
import JsonFormater from "./pages/JsonFormater";
import Regex from "./pages/Regex";
import Profile from "./pages/Profile";

function App() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const checkAuth = useAuthStore((state) => state.checkAuth);
  const { isLoggedin, isCheckingAuth, user } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth && !user) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-20 animate-spin" />
      </div>
    );
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route
            path="/login"
            element={!isAuthenticated ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path="/signup"
            element={!isAuthenticated ? <Signup /> : <Navigate to="/" />}
          />
          <Route
            path="/verify"
            element={
              !isAuthenticated && isLoggedin ? (
                <VerifyOtp />
              ) : (
                <Navigate to="/" />
              )
            }
          />

          <Route element={<MainLayout />}>
            <Route
              path="/"
              element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
            />
            <Route
              path="/dashboard"
              element={
                isAuthenticated ? <Dashboard /> : <Navigate to={"/login"} />
              }
            />
            <Route
              path="/profile"
              element={
                isAuthenticated ? <Profile /> : <Navigate to={"/login"} />
              }
            />
            <Route
              path="/snippets"
              element={
                isAuthenticated ? <Snippets /> : <Navigate to={"/login"} />
              }
            />
            <Route
              path="/palette"
              element={
                isAuthenticated ? <ColorPalette /> : <Navigate to={"/login"} />
              }
            />
            <Route
              path="/json-formater"
              element={
                isAuthenticated ? <JsonFormater /> : <Navigate to={"/login"} />
              }
            />
            <Route
              path="/regex"
              element={isAuthenticated ? <Regex /> : <Navigate to={"/login"} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;
