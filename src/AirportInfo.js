import React, {useState, useEffect, Component} from 'react';
import data from './Data/airports.json';
import {Card} from "react-bootstrap";
import './airports.css';
import ButtonBase from "@material-ui/core/ButtonBase";
import index from "styled-components/dist/styled-components-macro.esm";

const currentLocation = window.location.pathname.substring(10).replace(/%20/gi, " ");
const info = data.data.filter(data => data.airport_name == currentLocation);
const airportData = info.map( (data, index, airport_name) => {
    return (
        <div>
            <div>
                <br/>
            </div>
            <Card key = {index}>
                <ButtonBase
                    className={data.airport_name}
                    onClick={event => window.location.href="/airports/" + data.airport_name}
                >
                    <Card.Body>
                        <Card.Title>{data.airport_name}</Card.Title>
                        <Card.Text>Country of origin: {data.country_name}</Card.Text>
                        <Card.Text>Timezone: {data.timezone}</Card.Text>
                        <Card.Text>GMT: {data.gmt}</Card.Text>
                        <Card.Text>Iata Code: {data.iata_code}</Card.Text>
                        <Card.Text>GeoName ID: {data.geoname_id}</Card.Text>
                        <Card.Text>Latitude: {data.latitude}</Card.Text>
                        <Card.Text>Longitude: {data.longitude}</Card.Text>
                    </Card.Body>
                </ButtonBase>
            </Card>
        </div>
    )
});
class AirportInfo  extends Component{


    render()
    {
        return (
            <div>
                <div><br/></div>
                {currentLocation}
                {airportData}
            </div>
        )
    }
}

export {AirportInfo};


