import React, { useState, useEffect, Component } from 'react';
import port from './Data/airplanes.json';
import { Card } from "react-bootstrap";
import bg from './Images/giphy5.gif';
import './info.css';

const num = window.location.pathname.substring(11).replace(/%20/gi, " ");
const info = port.data.filter(data => data.construction_number == num);
const airplaneData = info.map((data, index, airport_name) => {
    return (
        <div className="AirplaneInfo container">

            <div className="row">

                <div className="image">
                    <div className="card ">
                        <img className="card-img-top" src={data.image_url} alt="Card image cap" />
                    </div>
                </div>

                <div className="link-1 mb-5">

                    <div className="card bg-dark text-center text-white">
                        <h4>Flights: </h4>
                    </div>
                </div>

                <div class="w-100 "></div>

                <div className="description">
                    <div className="card bg-dark text-center text-white">
                        <div className="card-body">
                            <h5 class="card-title">{data.iata_type}</h5>
                            <Card.Title>Owner: {data.plane_owner}</Card.Title>
                            <Card.Title>Age: {data.plane_age}</Card.Title>
                            <Card.Title>Model Name: {data.model_name}</Card.Title>
                            <Card.Title>Engine Count: {data.engines_count}</Card.Title>
                            <Card.Title>Construction Number: {data.construction_number}</Card.Title>
                            <Card.Title>Iata Type: {data.iata_type}</Card.Title>
                        </div>
                    </div>
                </div>

                <div className="link-2">

                    <div className="card text-center text-white">
                        <h4>Airports:</h4>
                    </div>
                </div>
            </div>
        </div>
    )
});
class AirlineInfo extends Component {


    render() {
        return (
            <div>
                <div><br /></div>
                {airplaneData}
            </div>
        )
    }
}

export { AirlineInfo };


