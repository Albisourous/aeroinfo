import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Home } from "./Home";
import Airplanes  from "./Airplanes";
import Flights from "./Flights";
import { Airports } from "./Airports";
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
                <Layout>

                    <Router>
                        <Switch>
                            <Route path="/airplanes" exact>
                                <Airplanes />
                            </Route>
                            <Route path="/airplanes/:id">
                                <AirplaneInfo />
                            </Route>
                            <Route path="/flights" exact>
                                <Flights />
                            </Route>
                            <Route path="/flights/:id">
                                <FlightInfo />
                            </Route>
                            <Route path="/airports" exact>
                                <Airports />
                            </Route>
                            <Route path="/airports/:id">
                                <AirportInfo />
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
