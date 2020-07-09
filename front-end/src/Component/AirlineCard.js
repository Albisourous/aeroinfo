
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
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
        maxWidth: 345,
        height: 440,
    },

    media: {
        height: 300,
        width: 330,
    },

});


const AirlineCard = props => {
    const info = props.info;
    const classes = useStyles();

    return (

        <div className="AirlineCard">
            <Card className={classes.root}>
                {/* <ButtonBase className="{info.registration_number}"
                    onClick={event => window.location.href = "/airlines/" + info.construction_number}> */}
                    <CardActionArea>

                        <CardMedia
                            className={classes.media}
                            image={info.image_url}
                        />

                        <ul class="list-group-flush">
                            <li class="list-group-item">Airline Name: {info.airline_name}</li>
                            <li class="list-group-item">Country: {info.country_name}</li>
                        </ul>
                    </CardActionArea>
                {/* </ButtonBase> */}
            </Card>
            </div>
    );
};

AirlineCard.propTypes = {

            };

export default AirlineCard;