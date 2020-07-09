import React, { useState, useEffect, Component } from 'react';
import port from './Data/airplanes.json';
import { Card } from "react-bootstrap";
import './info.css';
import Airlines from './Airlines';

const num = window.location.pathname.substring(10).replace(/%20/gi, " ");
const info = port.data.filter(data => data.construction_number == num);
const airplaneData = info.map((data, index, airport_name) => {
    return (
        <div className="AirlineInfo container">

            <div className="row">

                <div className="image">
                    <div className="card ">
                        <img className="card-img-top" src={data.image_url} alt="Card image cap" />
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
                            <h5 class="card-title">{data.airline_name}</h5>
                            <Card.Title>Country: {data.country_name}</Card.Title>
                            <Card.Title>Data Found: {data.date_founded}</Card.Title>
                            <Card.Title>Average Age of Fleet: {data.fleet_average_age}</Card.Title>
                            <Card.Title>Iata Code: {data.iata_code}</Card.Title>
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


