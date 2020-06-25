import React, {useState, useEffect} from 'react';
import data from './Data/airports.json';
import {Card} from "react-bootstrap";
import './airports.css'
import ButtonBase from "@material-ui/core/ButtonBase";
import divWithClassName from "react-bootstrap/cjs/divWithClassName";

function Airports() {
    const airportData = data.data.map( (data, index, airport_name) => {
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
                        </Card.Body>
                    </ButtonBase>
                </Card>
            </div>
        )
    });

    const test = async () => {
        const fetch = data.data.map((data) => data.airport_name);
        console.log(fetch);
    }


    return (
        <div>
            <li>
                <button>GMT</button>
                <button>Timezone</button>
                <button>Country of origin</button>
                <button>Airport name</button>
                <button clasds="disabled">Sort:</button>
            </li>
            <div><br/></div>
            {test}
            {airportData}
        </div>
    )
}

export {Airports};




