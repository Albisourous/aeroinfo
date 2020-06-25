import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import INFO_TYPES from "../Constants/enum";
import AirplaneCard from "./AirplaneCard";
import FlightCard from "./FlightCard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 2,
  },
  control: {
    padding: theme.spacing(1),
  },
}));


const _getInfoCard = (type, info) => {
  switch (type) {
    case INFO_TYPES.AIRPLANES:
      return (
        <AirplaneCard info={info}></AirplaneCard>);
    case INFO_TYPES.FLIGHTS:
      return (
        <FlightCard info={info}></FlightCard>
      );
    case INFO_TYPES.AIRPORTS:
      return (
        <AirplaneCard info={info}></AirplaneCard>
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
            {_getInfoCard(props.infoCardType, info)}
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );

}


export default InfoGrid;