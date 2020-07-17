import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./App.css";
import {Home} from "./Home";
import Airlines from "./Airlines";
import Flights from "./Flights";
import Airports from "./Airports";
import {About} from "./About";
import {PhotoSlay} from "./PhotoSlay";
import SearchPhotos from "./PhotoSlay/SearchPhotos";
import {SlayPieChart} from "./PhotoSlay/SlayPieChart";
import {SlayBubble} from "./PhotoSlay/SlayBubble";
import {Layout} from "./Component/Layout";
import {NavBar} from "./Component/NavBar";
import {AirportInfo} from "./AirportInfo";
import {FlightInfo} from "./FlightInfo";
import {AirlineInfo} from "./AirlineInfo";


function App() {

    return (
        <React.Fragment>
            <NavBar/>
            <Router>
                <Switch>
                    <Route path="/photoslay" exact>
                        <Layout><PhotoSlay/></Layout>
                    </Route>
                    <Route path="/photoslay/searchphotos" exact>
                        <Layout><SearchPhotos/></Layout>
                    </Route>
                    <Route path="/photoslay/piechart" exact>
                        <Layout><SlayPieChart/></Layout>
                    </Route>
                    <Route path="/photoslay/bubblechart" exact>
                        <Layout><SlayBubble/></Layout>
                    </Route>
                    <Route path="/airlines" exact>
                        <Layout><Airlines/></Layout>
                    </Route>
                    <Route path="/airlines/:id">
                        <Layout><AirlineInfo/></Layout>
                    </Route>
                    <Route path="/flights" exact>
                        <Layout> <Flights/></Layout>
                    </Route>
                    <Route path="/flights/:id">
                        <Layout> <FlightInfo/></Layout>
                    </Route>
                    <Route path="/airports" exact>
                        <Layout> <Airports/></Layout>
                    </Route>
                    <Route path="/airports/:id">
                        <Layout> <AirportInfo/></Layout>
                    </Route>
                    <Route path="/about">
                        <Layout> <About/></Layout>
                        <Route path="/api"></Route>
                    </Route>
                    <Route path="/" exact> <Home/>
                    </Route>

                </Switch>
            </Router>
        </React.Fragment>
    );

}

export default App;
