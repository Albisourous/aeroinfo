
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


const AirplaneCard = props => {
    const info = props.info;
    const classes = useStyles();

    

    return (
        
        <Card className={classes.root}>
            <ButtonBase className="{info.registration_number}"
                onClick={event => window.location.href = "/airplanes/" + info.construction_number}>
                <CardActionArea>
                    
                    <CardMedia
                        className={classes.media}
                        image={info.image_url}
                        title="lol"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="h2"><span>Plane Name:  </span>
                            {info.iata_type}
                        </Typography>
                        <Typography variant="h6" component="h2"><span>Plane Owner:  </span>
                            {info.plane_owner}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </ButtonBase>
        </Card>
    );
};

AirplaneCard.propTypes = {

};

export default AirplaneCard;