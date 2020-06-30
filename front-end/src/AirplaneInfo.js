import React, {useState, useEffect, Component} from 'react';
import port from './Data/airplanes.json';
import {Card} from "react-bootstrap";
import ButtonBase from "@material-ui/core/ButtonBase";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import './info.css';

const num = window.location.pathname.substring(11).replace(/%20/gi, " ");
const info = port.data.filter(data => data.construction_number == num);
const airplaneData = info.map( (data, index, airport_name) => {
    return (
        <div>
            <div>
                <br/>
            </div>
            <Card key = {index}>
                <ButtonBase
                    className={data.airport_name}
                    onClick={event => window.location.href="/airplanes/" + data.construction_number}
                >
                    <Card.Body>
                        <CardActionArea>
                            <CardMedia
                                className="pic"
                                image={data.image_url}
                                title="plane"
                            />
                        </CardActionArea>
                        <Card.Title>{data.iata_type}</Card.Title>
                        <Card.Text>Owner: {data.plane_owner}</Card.Text>
                        <Card.Text>Age: {data.plane_age}</Card.Text>
                        <Card.Text>Model Name: {data.model_name}</Card.Text>
                        <Card.Text>Engine Count: {data.engines_count}</Card.Text>
                        <Card.Text>Construction Number: {data.construction_number}</Card.Text>
                        <Card.Text>Iata Type: {data.iata_type}</Card.Text>
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
class AirplaneInfo  extends Component{


    render()
    {
        return (
            <div>
                <div><br/></div>
                {airplaneData}
            </div>
        )
    }
}

export {AirplaneInfo};


