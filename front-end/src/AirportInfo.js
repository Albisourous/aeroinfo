import React, {useState, useEffect, Component} from 'react';
import port from './Data/airports.json';
import air from './Data/airplanes.json';
import flight from './Data/flights.json';
import {Card} from "react-bootstrap";
import './setup.css';
import ButtonBase from "@material-ui/core/ButtonBase";
import InfiniteScroll from "react-infinite-scroll-component";
import {Link} from "react-router-dom";

const num = window.location.pathname.substring(10).replace(/%20/gi, " ");

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


const AirportInfo = () => {
    const [info, setInfo] = useState([]);
    const [lineData, setLine] = useState([]);
    const [flightData, setFlight] = useState([]);
    useEffect(() => {

        fetch('https://api-dot-naviaero.uc.r.appspot.com/api/airports/' + num)
            .then(response => response.json())
            .then(data => setInfo(data))
        fetch('http://aeroinfo.me/api/airline/' + num)
            .then(response => response.json())
            .then(data => setLine(data))
    }, []);
    console.log(num)
    console.log(info)
    console.log(info.country_image_url)

    return (
        <div className="AirportInfo container">

            <div className="row">
                <div className="image center">
                    <div className="card">
                        <img src={info.country_image_url}  className="center" width="300px"/>
                    </div>
                </div>

                <div>
                    {AirlinesLink}
                </div>


                <div className="w-100 "></div>

                <div className="description">
                    <div className="card bg-dark text-center text-white">
                        <div className="card-body">
                            <Card.Title>{info.airport_name}</Card.Title>
                            <Card.Title>Country of origin: {info.country_name}</Card.Title>
                            <Card.Title>Timezone: {info.timezone}</Card.Title>
                            <Card.Title>GMT: {info.gmt}</Card.Title>
                            <Card.Title>Iata Code: {info.iata_code}</Card.Title>
                            <Card.Title>GeoName ID: {info.geoname_id}</Card.Title>
                            <Card.Title>Latitude: {info.latitude}</Card.Title>
                            <Card.Title>Longitude: {info.longitude}</Card.Title>
                        </div>
                    </div>
                </div>

                <div>
                    {FlightsLink}
                </div>

            </div>
        </div>

    )
}

export {AirportInfo};



