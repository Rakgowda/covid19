import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tracking from './TrackingLive'
import {useSelector,useDispatch} from "react-redux"
import fetchglobalCovid from "../redux/globalTracking/globalTrackingAction"

import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
   
    cardItems:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
  
        
    },
    
  }));
  
function GlobalTracking(params){
    const classes = useStyles();
    const covideGlobalTrackingstate = useSelector(state=>state.CovidRecoveredreducer)
    const covidGlobalTrackingDispatch = useDispatch();
    useEffect(() => {
        covidGlobalTrackingDispatch(fetchglobalCovid())
      
    }, [])
console.log(covideGlobalTrackingstate.data)
    return (
        <React.Fragment>
             <div className={classes.cardItems} >
                 {/* <Tracking key="4" cardColor={"#FF8D4E"} cardTitle={"Total"} data={covideGlobalTrackingstate.data} />
                 <Tracking key="5" cardColor={"#FE4F4F"} cardTitle={"Death"} data={covideGlobalTrackingstate.data} />
                 <Tracking key="6" cardColor={"#2DBF56"} cardTitle="Recover" data={covideGlobalTrackingstate.data} /> */}
                 </div>
        </React.Fragment>
    )

}

export default GlobalTracking;