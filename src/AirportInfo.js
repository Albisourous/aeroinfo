import React, {useState, useEffect} from 'react';
import data from './Data/airports.json';
import {Card} from "react-bootstrap";
import './airports.css';

function ItemDetail({ match }) {

    const airportData = data.data.map( (data) => {
        return (
            <Card key = {data.airport_name}>
                <Card.Body>
                    <Card.Title> {data.airport_name} </Card.Title>
                    <Card.Text>{data.country_name}</Card.Text>
                </Card.Body>
            </Card>
        )
    })

    return (
        <div>
            {airportData}
        </div>
    )
}

export default ItemDetail;

