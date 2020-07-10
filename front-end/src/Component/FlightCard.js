import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        height: 250,
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        marginTop: 150,
        paddingTop: 15
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