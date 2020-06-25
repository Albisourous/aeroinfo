
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

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 300,
  },
});

const InfoCard = props => {
    const info = props.info;
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia 
                    className={classes.media}
                    image={info.image_url}
                    title="lol"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {info.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {info.description}
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

InfoCard.propTypes = {
    
};

export default InfoCard;