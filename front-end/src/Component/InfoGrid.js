import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import INFO_TYPES from "../Constants/enum";
import AirlineCard from "./AirlineCard";
import FlightCard from "./FlightCard";
import AirportCard from "./AirportCard";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: 2,
    },
    control: {
        padding: theme.spacing(1),
    },
}));


const _getInfoCard = (type, info, query) => {
    switch (type) {
        case INFO_TYPES.AIRLINES:
            return (
                <AirlineCard info={info} query={query}></AirlineCard>);
        case INFO_TYPES.FLIGHTS:
            return (
                <FlightCard info={info} query={query}></FlightCard>
            );
        case INFO_TYPES.AIRPORTS:
            return (
                <AirportCard info={info} query={query}></AirportCard>
            );
        default:
            return (<div></div>);
    }
}

const InfoGrid = props => {
    const [spacing, setSpacing] = React.useState(10);
    const classes = useStyles();
    const infoData = props.infoData;

    return (
        <Grid container className={classes.root} spacing={spacing}>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={spacing}>
                    {infoData.map((info, index) => (
                        <Grid key={index} item xs={4}>
                            {_getInfoCard(props.infoCardType, info, props.query)}
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );

}


export default InfoGrid;