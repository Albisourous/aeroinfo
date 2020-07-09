
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
        height: 433,
    },
    media: {
        height: 300,
        width: 330,
    },
});

const AirportCard = props => {
    const info = props.info;
    const classes = useStyles();
    return (
        <div className="AirportCard">
            <Card className={classes.root}>
                <ButtonBase className="{info.airport_name}"
                    onClick={event => window.location.href = "/airports/" + info.airport_name}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={info.image_url}
                            title="lol"
                        />
                        <ul class="list-group-flush">
                            <li class="list-group-item">Name: {info.airport_name}</li>
                            <li class="list-group-item">Country of origin:  {info.country_name}</li>
                        </ul>
                    </CardActionArea>
                </ButtonBase>
            </Card>
        </div>
    );
};

AirportCard.propTypes = {

};

export default AirportCard;