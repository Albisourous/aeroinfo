import React, { useState, useEffect, Component } from 'react';
import port from './Data/airplanes.json';
import { Card } from "react-bootstrap";

import axios from 'axios';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';

const num = window.location.pathname.substring(10).replace(/%20/gi, " ");

const AirlineInfo = () => {
    const [info, setInfo] = useState([]);

    useEffect(() => {

        fetch('https://api-dot-naviaero.uc.r.appspot.com/api/airlines/' + num)
            .then(response => response.json())
            .then(data => setInfo(data))

    }, []);


    return (
        <div className="AirlineInfo container">

            <div className="row">

                <div className="image">
                    <div className="card">
                        <img src={"https://daisycon.io/images/airline/?width=300&height=150&color=ffffff&iata=" + info.iata_code}></img>
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
                            <h5 class="card-title">{info.airline_name}</h5>
                            <Card.Title>Country: {info.country_name}</Card.Title>
                            <Card.Title>Data Found: {info.date_founded}</Card.Title>
                            <Card.Title>Average Age of Fleet: {info.fleet_average_age}</Card.Title>
                            <Card.Title>Iata Code: {info.iata_code}</Card.Title>
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



export { AirlineInfo };


