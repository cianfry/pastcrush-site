import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
     <>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <Layout currentPageName="Home">
              <Home />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout currentPageName="About">
              <About />
            </Layout>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
