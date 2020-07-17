import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import ButtonBase from "@material-ui/core/ButtonBase";
import Highlighter from "react-highlight-words";
import "./Highlight.css";


const useStyles = makeStyles({
    root: {
        width: 317,
        height: 400,

    },
    media: {
        height: 180,
        width: 317,
    },

});

const FlightCard = props => {
    const info = props.info;
    const classes = useStyles();
    const pic = 'https://source.unsplash.com/1600x900/?' + info.departure_airport + "," + info.arrival_airport + ",flight";
    return (
        <div className="FlightCard">
            <Card className={classes.root} onClick={event => window.location.href = "/flights/" + info.flight_id}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media} id="image"
                        image={pic}
                    />
                    <ul class="list-group-flush">
                        <li class="list-group-item">Departure: <span> </span>
                            <Highlighter
                                highlightClassName="highlight"
                                searchWords={[props.query]}
                                autoEscape={true}
                                textToHighlight={info.departure_airport} />
                        </li>
                        <li class="list-group-item">Arrival: <span> </span>
                            <Highlighter
                                highlightClassName="highlight"
                                searchWords={[props.query]}
                                autoEscape={true}
                                textToHighlight={info.arrival_airport} />
                        </li>
                        <li class="list-group-item">Date: <span> </span>{info.flight_date}</li>

                    </ul>
                </CardActionArea>
            </Card>
        </div>
    );
};

FlightCard.propTypes = {};

export default FlightCard;