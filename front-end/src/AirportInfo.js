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

const num = window.location.pathname.substring(10).replace(/%20/gi, " ");


const AirportInfo = () => {
    const [info, setInfo] = useState([]);

    useEffect(() => {

        fetch('http://127.0.0.1:8080/api/airports/' + num)
            .then(response => response.json())
            .then(data => setInfo(data))

    }, []);
    console.log(num)

    return (
        <div className="AirportInfo container">

            <div className="row">

                <div className="image">
                    <div className="card">
                        <img src={info.country_image_url}></img>
                    </div>
                </div>

                <div className="link-1 mb-5">

                    <div className="card bg-dark text-center text-white">
                        <h1>Flights: </h1>
                    </div>
                </div>

                <div class="w-100 "></div>

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

                <div className="link-2">
                    <div className="card text-center text-white">
                        <h1>Airports:</h1>
                    </div>
                </div>
            </div>
        </div>

    )
}

export { AirportInfo };



