import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ButtonBase from "@material-ui/core/ButtonBase";

const useStyles = makeStyles({
    root: {
        width: 345,
        height: 225,
        marginTop: 20,
    },
    media: {
        height: 64,
        width: 64,
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
});

const AirportCard = props => {
    const info = props.info;
    const classes = useStyles();
    return (
        <div className="AirportCard">
            <Card className={classes.root} onClick={event => window.location.href = "/airports/" + info.airport_id}>
                <ul class="list-group-flush">
                    <li class="list-group-item">Name: {info.airport_name}</li>
                    <li class="list-group-item">Country of origin: {info.country_name}</li>
                    <CardMedia
                        className={classes.media}
                        image={info.country_image_url}
                    />
                </ul>

            </Card>
        </div>
    );
};

AirportCard.propTypes = {};

export default AirportCard;