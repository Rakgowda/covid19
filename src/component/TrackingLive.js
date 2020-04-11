import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import Badge from '@material-ui/core/Badge';
const useStyles = makeStyles({
  card: {
    width: 100,
    marginTop:50,
    color:"white",
    textAlign:"center",
    margin: 10,
    height:120,
    marginTop:-10

  },
  cardContent:{
    textAlign:"center",
  },
  title:{
      fontSize:15,
      letterSpacing:"0.1em",
      fontWeight:"bold",
      textAlign:"center"
  },
  subtitlt:{
      fontSize:25,
      letterSpacing:"0.1em",
      fontWeight:"bold",
      textAlign:"center"

  },
  arrow:{
      color:"white",
      position:"relative",
      display:"flex",
      justifyContent:"flex-end",
  }

 
});

function Tracking(params) {
    const classes = useStyles();

    
    const cardcolor =  {background:params.cardColor};

    return (
      <Card className={classes.card} style={cardcolor} variant="outlined">
        <div className={classes.arrow}>
        <ArrowUpwardIcon style={{ fontSize:20}}></ArrowUpwardIcon>
        <Typography>{params.increased}</Typography>
        </div>
        
        <CardContent className={classes.cardContent}>
         
    <Typography className={classes.title}>{params.cardTitle}</Typography>
    <Typography className={classes.subtitlt}>{params.data}</Typography>

        </CardContent>
      </Card>
    );
        
    
}



export default Tracking;
