import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Home } from "./Home";
import { Aircrafts } from "./Aircrafts";
import { Flights } from "./Flights";
import { Airports } from "./Airports";
import { About } from "./About";
import { Layout } from "./Component/Layout";
import { NavBar } from "./Component/NavBar";
import  {ColorLine}  from "./Component/ColorLine";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <ColorLine />
        <Layout>
          
            <Router>
              <Switch>
                <Route path="/aircrafts">
                  <Aircrafts />
                </Route>
                <Route path="/flights">
                  <Flights />
                </Route>
                <Route path="/airports">
                  <Airports />
                </Route>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </Router>
          
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
