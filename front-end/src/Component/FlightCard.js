import React from 'react';

import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';


const useStyles = makeStyles({
    root: {
        width: 317,
        height: 225,
    },
    
});

const FlightCard = props => {
    const info = props.info;
    const classes = useStyles();
    return (
        <div className="FlightCard">
            
            <Card className={classes.root} onClick={event => window.location.href = "/flights/" + info.flight_id}>
                
                <ul class="list-group-flush">
                    <li class="list-group-item">Departure: {info.departure_airport}</li>
                    <li class="list-group-item">Arrival: {info.arrival_airport}</li>
                    <li class="list-group-item">Date: {info.flight_date}</li>
                </ul>
            </Card>
        </div>
    );
};

FlightCard.propTypes = {};

export default FlightCard;