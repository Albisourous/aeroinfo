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
import {AirlineInfo} from "../AirlineInfo";
import Highlighter from "react-highlight-words";
import "./Highlight.css";


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        height: 290,
    },

    media: {
        height: 70,
        width: 160,
    },

});


const AirlineCard = props => {
    const info = props.info;
    const classes = useStyles();

    return (
        <div className="AirlineCard">
            <Card className={classes.root} onClick={event => window.location.href = "/airlines/" + info.airline_id }>
                <CardActionArea>

                    <CardMedia
                        className={classes.media} id="image"
                        image={"https://daisycon.io/images/airline/?width=300&height=150&color=ffffff&iata=" + info.iata_code}
                    />

                    <ul class="list-group-flush">
                    <li class="list-group-item">Airline Name: <span> </span>
                            <Highlighter
                                highlightClassName="highlight"
                                searchWords={[props.query]}
                                autoEscape={true}
                                textToHighlight={info.airline_name} />
                        </li>

                        <li class="list-group-item">Country: <span> </span>
                            <Highlighter
                                highlightClassName="highlight"
                                searchWords={[props.query]}
                                autoEscape={true}
                                textToHighlight={info.country_name} />
                        </li>

                    </ul>
                </CardActionArea>
            </Card>
        </div>
    );
};

AirlineCard.propTypes = {};

export default AirlineCard;