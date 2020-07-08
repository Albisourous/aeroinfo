import React, { useState, useEffect, Component } from 'react';
import port from './Data/flights.json';
import { Card } from "react-bootstrap";
import ButtonBase from "@material-ui/core/ButtonBase";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import './info.css';


const num = window.location.pathname.substring(9).replace(/%20/gi, " ");
const info = port.data.filter(data => data["flight"].number == num);
const flightData = info.map((data, index, airport_name) => {
    return (




        <div className="FlightInfo container">

            <div className="row">

                <div className="image">
                    <div className="card mr-5">
                        <img className="card-img-top" src={data.image_url} alt="Card image cap" />
                    </div>
                </div>

                <div className="link-1 mb-5">
                    <div className="card bg-dark text-center text-white">
                        <h4>Airplanes:</h4>
                    </div>
                </div>
                
                <div class="w-100 "></div>

                <div className="description">
                    <div className="card bg-dark text-center text-white">
                        <div className="card-body">
                                <Card.Title>Flight: {data["flight"].number}</Card.Title>
                                <Card.Title>Airport: {data["departure"].airport}</Card.Title>
                                <Card.Title>Date: {data.flight_date}</Card.Title>
                                <Card.Title>Timezone: {data["departure"].timezone}</Card.Title>
                                <Card.Title>Status: {data.flight_status}</Card.Title>
                                <Card.Title>Iata: {data["departure"].iata}</Card.Title>
                        </div>
                    </div>
                </div>

                <div className="link-2">
                    <div className="card bg-dark text-center text-white">
                        <h4>Airports:</h4>
                    </div>
                </div>
            </div>
        </div>

    )
});

class FlightInfo extends Component {

    render() {
        return (
            <div>
                <div><br /></div>
                {flightData}
            </div>
        )
    }
}

export { FlightInfo };


