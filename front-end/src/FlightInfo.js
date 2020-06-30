import React, {useState, useEffect, Component} from 'react';
import port from './Data/flights.json';
import {Card} from "react-bootstrap";
import ButtonBase from "@material-ui/core/ButtonBase";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import './info.css';


const num = window.location.pathname.substring(9).replace(/%20/gi, " ");
const info = port.data.filter(data => data["flight"].number == num);
const flightData = info.map( (data, index, airport_name) => {
    return (
        <div>
            <div>
                <br/>
            </div>
            <Card key = {index}>
                <ButtonBase
                    className={data["aircraft"].construction_number}
                    onClick={event => window.location.href="/airplanes/" + data["aircraft"].construction_number}
                >
                    <Card.Body>
                        <Card.Title>Flight: {data["flight"].number}</Card.Title>
                        <Card.Text>Airport: {data["departure"].airport}</Card.Text>
                        <Card.Text>Date: {data.flight_date}</Card.Text>
                        <Card.Text>Timezone: {data["departure"].timezone}</Card.Text>
                        <Card.Text>Status: {data.flight_status}</Card.Text>
                        <Card.Text>Iata: {data["departure"].iata}</Card.Text>
                    </Card.Body>
                </ButtonBase>
            </Card>
            <br/>
            <br/>
            <img class="center"
                src={data.image_url}
                alt="new"
            />
        </div>
    )
});
class FlightInfo  extends Component{


    render()
    {
        return (
            <div>
                <div><br/></div>
                {flightData}
            </div>
        )
    }
}

export {FlightInfo};


