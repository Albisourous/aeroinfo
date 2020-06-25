import React, {useState, useEffect} from 'react';
import port from './Data/airports.json';
import {Card} from "react-bootstrap";
import './setup.css'
import ButtonBase from "@material-ui/core/ButtonBase";
import divWithClassName from "react-bootstrap/cjs/divWithClassName";

function Airports() {
    const airportData = port.data.map( (data, index) => {
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
                            <li className="card-list">
                            <Card.Title>{data.airport_name}</Card.Title>
                            <Card.Text>Country of origin: {data.country_name}</Card.Text>
                            <Card.Text>Timezone: {data.timezone}</Card.Text>
                            </li>
                        </Card.Body>
                    </ButtonBase>
                </Card>
            </div>
        )
    });

    return (
        <div>
            <li>
                <button>Timezone</button>
                <button>Country of origin</button>
                <button>Airport name</button>
                <button class="disabled">Sort:</button>
            </li>
            <div><br/></div>
            {airportData}
        </div>
    )
}

export {Airports};