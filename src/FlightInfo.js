import React, {useState, useEffect, Component} from 'react';
import data from './Data/flights.json';
import {Card} from "react-bootstrap";
import ButtonBase from "@material-ui/core/ButtonBase";

const currentLocation = window.location.pathname.substring(10).replace(/%20/gi, " ");
const info = data.data.filter(data => data == currentLocation);
const flightData = info.map( (data, index) => {
    return (
        <div>
            <div>
                <br/>
            </div>
            <Card key = {index}>
                <ButtonBase
                    className={data.airport_name}
                    onClick={event => window.location.href="/flights/" + data.airport_name}
                >
                    <Card.Body>
                        <Card.Title>{data.airport_name}</Card.Title>
                        <Card.Text>Country of origin: {data.country_name}</Card.Text>
                    </Card.Body>
                </ButtonBase>
            </Card>
        </div>
    )
});
class FlightInfo  extends Component{
    render()
    {
        return (
            <div>
                <div><br/></div>
                {currentLocation}
                {flightData}
            </div>
        )
    }
}

export {FlightInfo};


