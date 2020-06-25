import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import InfoCard from "./InfoCard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 2,
  },
  control: {
    padding: theme.spacing(1),
  },
}));

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
            <InfoCard info={info}></InfoCard>
          </Grid>
        ))}
        </Grid>
      </Grid>
    </Grid>
  );
}


export default InfoGrid;