import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
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
    },
    media: {
        height: 300,
    },
});

const FlightCard = props => {
    const info = props.info;
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <ButtonBase className="flight"
                        onClick={event => window.location.href = "/flights/" + info.flight.number}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={info.image_url}
                        title="lol"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="h2"><span>Arrival - Departure: </span>
                            {info.departure.airport}<span> - </span> {info.arrival.airport}
                        </Typography>
                        <Typography variant="h6" component="h2"><span>Date:  </span>
                            {info.flight_date}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </ButtonBase>
        </Card>
    );
};

FlightCard.propTypes = {

};

export default FlightCard;