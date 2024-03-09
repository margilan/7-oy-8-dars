import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import Bookmarks from "./pages/Bookmarks";
import About from "./pages/About";
import Layout from "./Layout";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!localStorage.getItem("token") && location.pathname != "/register") {
      navigate("/login");
    }
  });

  function ProtectedRoute({
    children,
    redirectTo = "/login",
    isAuthentication,
  }) {
    if (!isAuthentication) {
      navigate(redirectTo);
    }

    return children;
  }

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/Register" element={<Register></Register>}></Route>

        <Route
          path="/"
          element={
            <ProtectedRoute isAuthentication={token ? true : false}>
              <Layout>
                <Home></Home>
              </Layout>
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="/movies"
          element={
            <ProtectedRoute isAuthentication={token ? true : false}>
              <Layout>
                <Movies></Movies>
              </Layout>
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="/Series"
          element={
            <ProtectedRoute isAuthentication={token ? true : false}>
              <Layout>
                <Series></Series>
              </Layout>{" "}
            </ProtectedRoute>
          }
        ></Route>

        <Route
          path="/bookmarks"
          element={
            <ProtectedRoute isAuthentication={token ? true : false}>
              <Layout>
                <Bookmarks></Bookmarks>
              </Layout>
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/movies/about/:id"
          element={
            <ProtectedRoute isAuthentication={token ? true : false}>
                <Layout>
                <About></About>
                </Layout>
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
