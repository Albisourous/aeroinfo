import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Home } from "./Home";
import Airplanes  from "./Airplanes";
import Flights from "./Flights";
import  Airports  from "./Airports";
import { About } from "./About";
import { Layout } from "./Component/Layout";
import { NavBar } from "./Component/NavBar";
import  {ColorLine}  from "./Component/ColorLine";
import { AirportInfo } from "./AirportInfo";
import { FlightInfo } from "./FlightInfo";
import { AirplaneInfo } from "./AirplaneInfo";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <ColorLine />
                    <Router>
                        <Switch>
                            <Route path="/airplanes" exact>
                                <Layout><Airplanes /></Layout>
                                
                            </Route>
                            <Route path="/airplanes/:id">
                            <Layout><AirplaneInfo /></Layout>
                            </Route>
                            <Route path="/flights" exact>
                            <Layout> <Flights /></Layout>
                            </Route>
                            <Route path="/flights/:id">
                            <Layout> <FlightInfo /></Layout>
                            </Route>
                            <Route path="/airports" exact>
                            <Layout>  <Airports /></Layout>
                            </Route>
                            <Route path="/airports/:id">
                            <Layout>   <AirportInfo /></Layout>
                            </Route>
                            <Route path="/about">
                            <Layout>  <About /></Layout>
                            </Route>
                            <Route path="/"> <Home />
                            </Route>
                        </Switch>
                    </Router>
            </React.Fragment>
        );
    }
}

export default App;
