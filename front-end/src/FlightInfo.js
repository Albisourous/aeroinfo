import React, { useState, useEffect, Component } from 'react';
import { Card } from "react-bootstrap";
import ButtonBase from "@material-ui/core/ButtonBase";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";



const num = window.location.pathname.substring(9).replace(/%20/gi, " ");


const FlightInfo = () => {
    const [info, setInfo] = useState([]);

    useEffect(() => {

        fetch('https://api-dot-naviaero.uc.r.appspot.com/api/flights/' + num)
            .then(response => response.json())
            .then(data => setInfo(data))

    }, []);


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
                        <h1>Airlines: </h1>
                    </div>
                </div>

                <div class="w-100 "></div>

                <div className="description">
                    <div className="card bg-dark text-center text-white">
                        <div className="card-body">
                            <Card.Title>Departure: {info.departure_airport}</Card.Title>
                            <Card.Title>Departure Scheduled: {info.departure_scheduled}</Card.Title>
                            <Card.Title>Arrival: {info.arrival_airport}</Card.Title>
                            <Card.Title>Departure Scheduled: {info.arrival_scheduled}</Card.Title>
                            <Card.Title>Flight Number: {info.flight_number}</Card.Title>
                            <Card.Title>Date: {info.flight_date}</Card.Title>
                            <Card.Title>Status: {info.flight_status}</Card.Title>
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


export { FlightInfo };
