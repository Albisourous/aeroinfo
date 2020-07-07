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
                    <div className="card">
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

                    <div className="card bg-dark text-center text-white">


                        <div className="card-body">
                            <Card.Title>{data.iata_type}</Card.Title>
                            <Card.Text>Owner: {data.plane_owner}</Card.Text>
                            <Card.Text>Age: {data.plane_age}</Card.Text>
                            <Card.Text>Model Name: {data.model_name}</Card.Text>
                            <Card.Text>Engine Count: {data.engines_count}</Card.Text>
                            <Card.Text>Construction Number: {data.construction_number}</Card.Text>
                            <Card.Text>Iata Type: {data.iata_type}</Card.Text>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
});
class AirplaneInfo extends Component {


    render() {
        return (
            <div>
                <div><br /></div>
                {airplaneData}
            </div>
        )
    }
}

export { AirplaneInfo };


