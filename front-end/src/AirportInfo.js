import React, {useState, useEffect, Component} from 'react';
import port from './Data/airports.json';
import air from './Data/airplanes.json';
import flight from './Data/flights.json';
import {Card} from "react-bootstrap";
import './setup.css';
import './info.css';
import ButtonBase from "@material-ui/core/ButtonBase";
import InfiniteScroll from "react-infinite-scroll-component";
import {Link} from "react-router-dom";

const currentLocation = window.location.pathname.substring(10).replace(/%20/gi, " ");
const info = port.data.filter(data => data.airport_name == currentLocation);
function refreshPage() {
    window.location.reload(false);
  }
const airData = air.data.map((data) => {
    return (
        <InfiniteScroll dataLength={1000}
                        style={{display: 'inline-flex', maxHeight: '400px', overflow: 'auto', height: 'auto'}}
                        height={400}>
            <div>
                <p onClick={refreshPage} to={"/airlines/" + data.construction_number}
                      onClick={event => window.location.href = "/airlines/" + data.construction_number}
                >
                    {data != null && data.length != 0 ? (
                        data.construction_number
                    ) : "No Information found"}
                </p>
            </div>
        </InfiniteScroll>
    )
});

const flightData = flight.data.map((data) => {
    return (
        <InfiniteScroll dataLength={1000}
                        style={{display: 'inline-flex', maxHeight: '400px', overflow: 'auto', height: 'auto'}}
                        height={400}>
            <div>
                <p onClick={refreshPage} to={"/flights/" + data.flight.number}
                      onClick={event => window.location.href = "/flights/" + data.flight.number}
                >
                    {data != null && data.flight != null && data.length != 0 ? (
                        data.flight.number
                    ) : "No Information found"}
                </p>
            </div>
        </InfiniteScroll>
    )
});

const AirlinesLink =
    <div className="link-1">
        <div className="card mb-5 text-center text-white">
            <h4>Airlines: </h4>
            <div className="cardLink flex-column">
                <br></br>
                {airData}
            </div>
        </div>
    </div>;

const FlightsLink =
    <div className="link-2">
        <div className="card mb-5 text-center text-white">
            <h4>Flights: </h4>
            <div className="cardLink flex-column">
                <br></br>
                {flightData}
            </div>
        </div>
    </div>;

const airportData = info.map((data, allData, index, airport_name) => {
    return (
        <div className="AirportInfo container">
            <div className="row">

                <div className="image">
                    <div className="card mr-5">
                        <img className="card-img-top" src={data.image_url} alt="Card image cap"/>
                    </div>
                </div>

                <div>
                    {AirlinesLink}
                </div>

                <div class="w-100 "></div>
                <div className="description">
                    <div className="card bg-dark text-center text-white">
                        <div className="card-body">
                            <Card.Title>{data.airport_name}</Card.Title>
                            <Card.Title>Country of origin: {data.country_name}</Card.Title>
                            <Card.Title>Timezone: {data.timezone}</Card.Title>
                            <Card.Title>GMT: {data.gmt}</Card.Title>
                            <Card.Title>Iata Code: {data.iata_code}</Card.Title>
                            <Card.Title>GeoName ID: {data.geoname_id}</Card.Title>
                            <Card.Title>Latitude: {data.latitude}</Card.Title>
                            <Card.Title>Longitude: {data.longitude}</Card.Title>
                        </div>

                    </div>
                </div>

                <div>
                    {FlightsLink}
                </div>

            </div>
        </div>)
});

class AirportInfo extends Component {

    render() {
        return (
            <div>
                <div><br/></div>
                {airportData}
            </div>
        )
    }
}

export {AirportInfo};


