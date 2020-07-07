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

                <div className="link">
                    <div className="card">
                        <h4>Flights: </h4>
                        <h4>Airports:</h4>
                    </div>
                </div>
                <div class="w-100 "></div>

                <div className="description">
                    <div className="card text-center mr-5">
                        <div className="card-body">
                                <Card.Title>Flight: {data["flight"].number}</Card.Title>
                                <Card.Text>Airport: {data["departure"].airport}</Card.Text>
                                <Card.Text>Date: {data.flight_date}</Card.Text>
                                <Card.Text>Timezone: {data["departure"].timezone}</Card.Text>
                                <Card.Text>Status: {data.flight_status}</Card.Text>
                                <Card.Text>Iata: {data["departure"].iata}</Card.Text>
                        </div>
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


