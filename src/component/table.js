import React, { useState, useEffect } from 'react';

import {useSelector,useDispatch} from "react-redux"

import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import fetchglobalCovid from "../redux/globalTracking/globalTrackingAction"
import fetchCovidDeaths from "../redux/coviddeathtracking/covidDeathAction"
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: 15,
    display:"flex",
    fontWeight:"bold",
    justifyContent: "flex-start",
    justifyItems:"center",


  },
  secondaryHeading: {
    margin:20

  },
  incresed:{
    color:"red",

  }
}));

export default function ControlledExpansionPanels() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
    const covidStaTrackingstate = useSelector(state=>state.globalreducer)
    const covidSateTrackingDispatch = useDispatch();
    const covidDeathTrackingstate = useSelector(state=>state.CovidDeathreducer)
    const covidDeathTrackingDispatch = useDispatch();


    useEffect(() => {
        covidDeathTrackingDispatch(fetchCovidDeaths());
        covidSateTrackingDispatch(fetchglobalCovid());
        
    }, [])

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <table class="table table-striped">
    <thead>
      <tr style={{textAlign:"center"}}>
        <th>State</th>
        <th>Confirmed</th>
        <th>Death</th>
        <th>Recovered</th>
      </tr>
    </thead>
    <tbody>
    {covidDeathTrackingstate.Deathdata.data?

//   console.log(covidDeathTrackingstate.Deathdata.data.history)

covidDeathTrackingstate.Deathdata.data.history[covidDeathTrackingstate.Deathdata.data.history.length-1].statewise.map((state,index)=>{
  
  let confirmed=state.confirmed-covidDeathTrackingstate.Deathdata.data.history[covidDeathTrackingstate.Deathdata.data.history.length-2].statewise[index].confirmed;
  let deaths=state.deaths-covidDeathTrackingstate.Deathdata.data.history[covidDeathTrackingstate.Deathdata.data.history.length-2].statewise[index].deaths;
  let recovered=state.recovered-covidDeathTrackingstate.Deathdata.data.history[covidDeathTrackingstate.Deathdata.data.history.length-2].statewise[index].recovered;

  return (

  

<tr style={{textAlign:"center"}} data-toggle="collapse" data-target="#demo1" class="accordion-toggle">
<td >{state.state}
</td>
<td>{state.confirmed} <sup><span class="badge badge-pill badge-warning" style={{ fontSize:8}}>{confirmed>0?(<ArrowUpwardIcon style={{ fontSize:8}}></ArrowUpwardIcon>):""}{confirmed>0?confirmed:""}</span></sup></td>
<td>{state.deaths}<sup><span class="badge badge-pill badge-danger" style={{ fontSize:8}}>{deaths>0?(<ArrowUpwardIcon style={{ fontSize:8}}></ArrowUpwardIcon>):""}{deaths>0?deaths:""}</span></sup></td>
<td>{state.recovered} <sup><span class="badge badge-pill badge-success" style={{ fontSize:8}}>{recovered>0?(<ArrowUpwardIcon style={{ fontSize:8}}></ArrowUpwardIcon>):""}{recovered>0?recovered:""}</span></sup></td>

      </tr>
 

)        
    
    
    })
  :
  (<tr style={{textAlign:"center"}}>
  <td>...</td>
  <td>...</td>
  <td>...</td>
  <td>...</td>
  
        </tr>)}
 
  
 
      
     
    </tbody>
  </table>

{/* 
      {covidDeathTrackingstate.Deathdata.data?

    //   console.log(covidDeathTrackingstate.Deathdata.data.history)

    covidDeathTrackingstate.Deathdata.data.history[covidDeathTrackingstate.Deathdata.data.history.length-1].statewise.map((state)=>{
         
 return (<ExpansionPanel expanded={expanded === state.state} style={{}} onChange={handleChange(state.state)}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className={classes.heading}
        >
         
          <p className={classes.secondaryHeading}>{state.state}</p>
          <p className={classes.secondaryHeading}>{state.confirmed}</p>
          <p className={classes.secondaryHeading}>{state.deaths}</p>
          <p className={classes.secondaryHeading}>{state.recovered}</p>

         

        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
            maximus est, id dignissim quam.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>


)        
        
        
        })
      :""}
      */}
      
     
    </div>
  );
}
