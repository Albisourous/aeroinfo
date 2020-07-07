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
                            
                                <Card.Title>{data.airport_name}</Card.Title>
                                <Card.Text>Country of origin: {data.country_name}</Card.Text>
                                <Card.Text>Timezone: {data.timezone}</Card.Text>
                                <Card.Text>GMT: {data.gmt}</Card.Text>
                                <Card.Text>Iata Code: {data.iata_code}</Card.Text>
                                <Card.Text>GeoName ID: {data.geoname_id}</Card.Text>
                                <Card.Text>Latitude: {data.latitude}</Card.Text>
                                <Card.Text>Longitude: {data.longitude}</Card.Text>
                            
                        </div>
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


