import React, { useState, useEffect, Component } from 'react';
import port from './Data/airports.json';
import { Card } from "react-bootstrap";
import './setup.css';
import './info.css';
import ButtonBase from "@material-ui/core/ButtonBase";

const currentLocation = window.location.pathname.substring(10).replace(/%20/gi, " ");
const info = port.data.filter(data => data.airport_name == currentLocation);
const airportData = info.map((data, index, airport_name) => {
    return (
        <div className="AirportInfo container">

            <div className="row">

                <div className="image">
                    <div className="card mr-5">
                        <img className="card-img-top" src={data.image_url} alt="Card image cap" />
                    </div>
                </div>

                <div className="link-1">
                    
                    <div className="card mb-5 text-center text-white">
                        <h4>Airplanes: </h4>
                        
                    </div>
                </div>

                <div class="w-100 "></div>

                <div className="description">
                    <div className="card bg-dark text-center text-white">
                        <div className="card-body">
                                <Card.Title>{data.airport_name}</Card.Title>
                                <Card.Title>Country of origin: {data.country_name}</Card.Title>
                                <Card.Title>Timezone: {data.timezone}</Card.Title>
                                <Card.Title>GMT: {data.gmt}</Card.Title>
                                <Card.Title>Iata Code: {data.iata_code}</Card.Title>
                                <Card.Title>GeoName ID: {data.geoname_id}</Card.Title>
                                <Card.Title>Latitude: {data.latitude}</Card.Title>
                                <Card.Title>Longitude: {data.longitude}</Card.Title>
                                
                        </div>

                    </div>
                </div>
                <div className="link-2">
                    
                    <div className="card text-center text-white">
                        <h4>Flights:</h4>
                    </div>
                </div>
            </div>
        </div>
    )
});
class AirportInfo extends Component {


    render() {
        return (
            <div>
                <div><br /></div>
                {airportData}
            </div>
        )
    }
}

export { AirportInfo };


