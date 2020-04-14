import React, { useState, useEffect } from 'react';
import virus from "../images/Corona.svg"
import { makeStyles } from '@material-ui/core/styles';
import Tracking from './TrackingLive'
import {useSelector,useDispatch} from "react-redux"
import fetchCovid from "../redux/getCovidlivetracking/covidJsonAction"
import fetchCovidDeaths from "../redux/coviddeathtracking/covidDeathAction"
import fetchCovidRecovered from "../redux/covidrecovered/covidRecoveredAction"
import Typography from '@material-ui/core/Typography';
import GlobalTracking from "./globalTracking"
import ControlledExpansionPanels from "./table.js"
import Divider from '@material-ui/core/Divider';
import StateList from "./staelist"
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
      width:50,
      height:40,
     

  },
  cardItems:{
      display:"flex",
      alignItems:"center",
      justifyContent:"center"

      
  },
  
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
    }, [])
    return(
            <React.Fragment>
                 <h1 className={classes.root}>{"INDIA COVID19"}<img className={classes.images} src={virus} alt="virus"></img>{" LIVE TRACKING"}</h1>
                 

                

                 <Typography style={{fontSize:15,textAlign:"center",color:"#21bf73"}} gutterBottom>
          Last Update at {covidTrackingstate.data.data?Dateformate(covidTrackingstate.data.data.lastRefreshed):"..."}
        </Typography>
<StateList></StateList>
<h4 style={{textAlign:"center"}}> India Live COVID19 Tracking</h4>
            <br></br>
                 <div className={classes.cardItems} >

                 <Tracking key="1" cardColor={"#FF8D4E"} cardTitle={"Total"} data={covidTrackingstate.data.data?covidTrackingstate.data.data.total.confirmed:"..."} increased={covidDeathTrackingstate.Deathdata.data && covidTrackingstate.data.data?(covidTrackingstate.data.data.total.confirmed - covidDeathTrackingstate.Deathdata.data.history[covidDeathTrackingstate.Deathdata.data.history.length-2].total.confirmed):"..."} />
                 <Tracking key="2" cardColor={"#0779e4"} cardTitle={"Active"} data={covidTrackingstate.data.data?covidTrackingstate.data.data.total.active:"..."} increased={covidDeathTrackingstate.Deathdata.data && covidTrackingstate.data.data?(covidTrackingstate.data.data.total.active-covidDeathTrackingstate.Deathdata.data.history[covidDeathTrackingstate.Deathdata.data.history.length-2].total.active):"..."}/>
                 <Tracking key="2" cardColor={"#FE4F4F"} cardTitle={"Death"} data={covidTrackingstate.data.data?covidTrackingstate.data.data.total.deaths:"..."} increased={covidDeathTrackingstate.Deathdata.data && covidTrackingstate.data.data?(covidTrackingstate.data.data.total.deaths-covidDeathTrackingstate.Deathdata.data.history[covidDeathTrackingstate.Deathdata.data.history.length-2].total.deaths):"..."}/>
                 <Tracking key="3" cardColor={"#2DBF56"} cardTitle="Recover" data={covidTrackingstate.data.data?covidTrackingstate.data.data.total.recovered:"..."} increased={covidDeathTrackingstate.Deathdata.data && covidTrackingstate.data.data?(covidTrackingstate.data.data.total.recovered-covidDeathTrackingstate.Deathdata.data.history[covidDeathTrackingstate.Deathdata.data.history.length-2].total.recovered):"..."} />
                 </div>
               
                 
                 <br></br>
                 <h3 style={{textAlign:"center"}}>State Wise</h3>
                 <p style={{textAlign:"end"}}> <span className="badge badge-info">Click on state for more info</span></p>
                
                 

                 <ControlledExpansionPanels />
            </React.Fragment>
    )
}

function Dateformate(date){
    let d = date.split("T")
    return d[0]+" "+d[1].split(".")[0]
}

export default Header;