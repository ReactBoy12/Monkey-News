import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React, { Component } from "react";
import Navbar from "./Components/Navbar";

import News from "./Components/News";

export default class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News country="in" headtitle="Home" category="general" />
              }
            />
            <Route
              exact
              path="/general"
              element={
                <News
                  key="general"
                  country="in"
                  headtitle="General"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  key="business"
                  country="in"
                  headtitle="Business"
                  category="business"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  key="entertainment"
                  country="in"
                  headtitle="Entertainment"
                  category="entertainment"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  key="health"
                  country="in"
                  headtitle="Health"
                  category="health"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  key="science"
                  country="in"
                  headtitle="Science"
                  category="science"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News
                  key="sports"
                  country="in"
                  headtitle="Sports"
                  category="sports"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  key="technology"
                  country="in"
                  headtitle="Technology"
                  category="technology"
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}
