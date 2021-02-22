import React from "react";

import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
};
