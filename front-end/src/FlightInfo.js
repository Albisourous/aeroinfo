import React, {useState, useEffect, Component} from 'react';
import port from './f.json';
import {Card} from "react-bootstrap";
import ButtonBase from "@material-ui/core/ButtonBase";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";



const id = window.location.pathname.substring(9).replace(/%20/gi, " ");
const info = port.flights.filter(data => data.flight_id == id);
const flightData = info.map((data, index, airport_name) => {
    return (
        <div className="FlightInfo container">

            <div className="row">

                <div className="image">
                    <div className="card">
                        <img src={"https://www.you-fly.com/aptimg/raw/aid,apt,h,e,hear,ai,1304169445519.jpg"}></img>
                    </div>
                </div>

                <div className="link-1 mb-5">

                    <div className="card bg-dark text-center text-white">
                        <h1>Flights: </h1>
                    </div>
                </div>

                <div className="w-100 "></div>

                <div className="description">
                    <div className="card bg-dark text-center text-white">
                        <div className="card-body">
                            <Card.Title>Departure: {data.departure_airport}</Card.Title>
                            <Card.Title>Departure Scheduled: {data.departure_scheduled}</Card.Title>
                            <Card.Title>Arrival: {data.arrival_airport}</Card.Title>
                            <Card.Title>Departure Scheduled: {data.arrival_scheduled}</Card.Title>
                            <Card.Title>Flight Number: {data.flight_number}</Card.Title>
                            <Card.Title>Date: {data.flight_date}</Card.Title>
                            <Card.Title>Status: {data.flight_status}</Card.Title>
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
});

class FlightInfo extends Component {
    // const [info, setInfo] = useState([]);
    //
    // useEffect(() => {
    //
    //     fetch('http://127.0.0.1:8080/api/flights/' + num)
    //         .then(response => response.json())
    //         .then(data => setInfo(data))
    //
    // }, []);
    render() {
        return (
            <div>
                <div><br/></div>
                {flightData}
            </div>

        )
    }


}

export {FlightInfo};
