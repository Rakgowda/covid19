import React, { useState, useEffect } from 'react';
import virus from "../images/virus.jpg"
import { makeStyles } from '@material-ui/core/styles';
import Tracking from './TrackingLive'
import {useSelector,useDispatch} from "react-redux"
import fetchCovid from "../redux/getCovidlivetracking/covidJsonAction"
import fetchCovidDeaths from "../redux/coviddeathtracking/covidDeathAction"
import fetchCovidRecovered from "../redux/covidrecovered/covidRecoveredAction"
const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
    fontSize:30,
    letterSpacing:10,
   textAlign:"center"
  },
  images:{
      width:200,
      height:150,
      marginLeft:"50%",
      transform:"translate(-50%,0%)"
  },
  cardItems:{
      display:"flex",
      alignItems:"center",
      justifyContent:"center"

      
  }
}));

function Header(params) {
    const classes = useStyles();

    const covidTrackingstate = useSelector(state=>state.reducer)
    const covidDeathTrackingstate = useSelector(state=>state.CovidDeathreducer)
    const covidecoveredTrackingstate = useSelector(state=>state.CovidRecoveredreducer)

    
    
    const covidTrackingDispatch = useDispatch();
    const covidDeathTrackingDispatch = useDispatch();
    const covidRecoveredTrackingDispatch = useDispatch();



    useEffect(() => {
        covidTrackingDispatch(fetchCovid());
        covidDeathTrackingDispatch(fetchCovidDeaths());
        covidRecoveredTrackingDispatch(fetchCovidRecovered())
    }, [])
    return(
            <React.Fragment>
                 <h1 className={classes.root}>{"COVID19 LIVE TRACKING"}</h1>
                 <img className={classes.images} src={virus} alt="virus"></img>
                 <div className={classes.cardItems} >
                 <Tracking key="1" cardColor={"#FF8D4E"} cardTitle={"Total"} data={covidTrackingstate.data} />
                 <Tracking key="2" cardColor={"#FE4F4F"} cardTitle={"Death"} data={covidDeathTrackingstate.Deathdata} />
                 <Tracking key="3" cardColor={"#2DBF56"} cardTitle="Recover" data={covidecoveredTrackingstate.RecoveredData} />
                 </div>
            </React.Fragment>
    )
}

export default Header;