import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { AlbumDetails } from "./pages/AlbumDetails";
import { NotFound } from "./pages/NotFound";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/albums/:position" exact component={AlbumDetails} />
        <Route path="/404" component={NotFound} />
        <Redirect to="/404" />
      </Switch>
    </BrowserRouter>
  );
};
