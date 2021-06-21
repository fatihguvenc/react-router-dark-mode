import React from "react";
import "./style.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Main from "./components/Main";
import About from "./components/About";
import Contact from "./components/Contact";
import { lightTheme, darkTheme } from "./theme/theme";

export default function App() {
  const [checked, setChecked] = React.useState(false);

  function themeChanger() {
    setChecked(checked.theme === "dark" ? lightTheme : darkTheme);
  }
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container">
          <div className="row mt-5">
            <div className="form-check form-switch my-5 mr-auto ml-auto">
              <input
                onClick={themeChanger}
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckChecked"
              />
            </div>
            <Switch>
              <Route path="/about">
                <About theme={checked} />
              </Route>
              <Route path="/contact">
                <Contact theme={checked} />
              </Route>
              <Route path="/">
                <Main theme={checked} />
              </Route>
            </Switch>
          </div>
        </div>
        <Footer theme={checked} />
      </div>
    </Router>
  );
}
