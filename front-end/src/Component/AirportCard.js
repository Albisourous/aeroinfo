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
import Highlighter from "react-highlight-words";
import "./Highlight.css";

const useStyles = makeStyles({
    root: {
        width: 317,
        height: 225,
        marginTop: 20,
    },
    media: {
        height: 64,
        width: 64,
        left: 110,
        marginLeft: 80,
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
                    <CardMedia
                        className={classes.media}
                        image={info.country_image_url}
                    />
                    <li class="list-group-item">Name: <span> </span>
                        <Highlighter
                            highlightClassName="highlight"
                            searchWords={[props.query]}
                            autoEscape={true}
                            textToHighlight={info.airport_name} />
                    </li>
                    <li class="list-group-item">Country of origin: <span> </span>
                        <Highlighter
                            highlightClassName="highlight"
                            searchWords={[props.query]}
                            autoEscape={true}
                            textToHighlight={info.country_name} />
                    </li>


                </ul>

            </Card>
        </div>
    );
};

AirportCard.propTypes = {};

export default AirportCard;