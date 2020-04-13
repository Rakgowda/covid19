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
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import fetchCovid from "../redux/getCovidlivetracking/covidJsonAction"

import Divider from '@material-ui/core/Divider';

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
    const covidTrackingstate = useSelector(state=>state.reducer)
    const covidTrackingDispatch = useDispatch();

    const covidDeathTrackingstate = useSelector(state=>state.CovidDeathreducer)
    const covidDeathTrackingDispatch = useDispatch();
 


    useEffect(() => {
      covidTrackingDispatch(fetchCovid());

        covidDeathTrackingDispatch(fetchCovidDeaths());
        covidSateTrackingDispatch(fetchglobalCovid());
        
    }, [])

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    
    <div>
      <table className="table table-hover">
    <thead>
      <tr style={{textAlign:"center"}}>
        <th>State</th>
        <th>Confirmed</th>
        <th>Death</th>
        <th>Recovered</th>
      </tr>
      
    </thead>
    <tbody>
    {covidDeathTrackingstate.Deathdata.data && covidTrackingstate.data.data?

covidTrackingstate.data.data.statewise.sort((a,b)=>b.confirmed-a.confirmed).map((state,index)=>{
  
  let len = covidDeathTrackingstate.Deathdata.data.history.length;
  let prevsta = covidDeathTrackingstate.Deathdata.data.history[len-2].statewise.filter((a)=>a.state==state.state).map(b=>b)
  let previconf = prevsta[0].confirmed;
  let prevideath = prevsta[0].deaths;
  let previrecoverd = prevsta[0].recovered;
 
  let confirmed=state.confirmed-previconf;
  let deaths=state.deaths-prevideath;
  let recovered=state.recovered-previrecoverd;



  return (


      <React.Fragment key={state.state}>
<tr style={{textAlign:"center"}} data-toggle="collapse" data-target={"#"+state.state.split(" ")[0]} key={state.state} >
<td >
<span style={{position:"absolute",left:0}} className="mr-2"><ArrowRightIcon></ArrowRightIcon></span>{state.state}
</td>
<td>{state.confirmed} <sup><span className="text-warning" style={{ fontSize:9}}>{confirmed>0?(<ArrowUpwardIcon style={{ fontSize:9}}></ArrowUpwardIcon>):""}{confirmed>0?confirmed:""}</span></sup></td>
<td>{state.deaths}<sup><span className="text-danger" style={{ fontSize:9}}>{deaths>0?(<ArrowUpwardIcon style={{ fontSize:9}}></ArrowUpwardIcon>):""}{deaths>0?deaths:""}</span></sup></td>
<td>{state.recovered} <sup><span className="text-success" style={{ fontSize:9}}>{recovered>0?(<ArrowUpwardIcon style={{ fontSize:9}}></ArrowUpwardIcon>):""}{recovered>0?recovered:""}</span></sup></td>

      </tr>
      <div id={state.state.split(" ")[0]} className="collapse" style={{alignItems:"center"}}>
  <h4>{state.state} State Detail</h4>
      <table className="table table-striped" key={state.state}>
    <thead>
    <tr style={{textAlign:"center"}}>
        <th>District</th>
        <th>Confirmed</th>
        
      </tr>
    </thead>
    <tbody>

      {covidStaTrackingstate.data[state.state]?
      
        Object.keys(covidStaTrackingstate.data[state.state].districtData).sort((a,b)=>covidStaTrackingstate.data[state.state].districtData[b].confirmed - covidStaTrackingstate.data[state.state].districtData[a].confirmed).map((keyname,index)=>{
          return (<tr style={{textAlign:"center"}} key={keyname}>
          <td>{keyname}</td>
          <td>{covidStaTrackingstate.data[state.state].districtData[keyname].confirmed}<sup><span className="text-warning" style={{ fontSize:9}}>{covidStaTrackingstate.data[state.state].districtData[keyname].delta.confirmed>0?(<ArrowUpwardIcon style={{ fontSize:9}}></ArrowUpwardIcon>):""}{covidStaTrackingstate.data[state.state].districtData[keyname].delta.confirmed>0?covidStaTrackingstate.data[state.state].districtData[keyname].delta.confirmed:""}</span></sup></td>
         
          
                </tr>)
        })
      :
      <tr style={{textAlign:"center"}}>
  <td>...</td>
  <td>...</td>
  
  
        </tr>}
      
      
    </tbody>
  </table>
      </div>
     
      </React.Fragment>
 

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

      
     
    </div>
  );

  function tableData(state) {
    return (covidStaTrackingstate.data.kerala?
      (
        Object.keys(covidStaTrackingstate.data["Kerala"].districtData).map((keyname,index)=>{
          console.log(keyname) 
        })
      ):
      <tr style={{textAlign:"center"}}>
  <td>...</td>
  <td>...</td>
  <td>...</td>
  <td>...</td>
  
        </tr>
      )
    }
}
