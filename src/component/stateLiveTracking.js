import React, { useState, useEffect } from 'react';
import {useSelector,useDispatch} from "react-redux"

import fetchCovidDeaths from "../redux/coviddeathtracking/covidDeathAction"
import Tracking from './TrackingLive'
import Linechart from "./linechart"


function StateChart(params){
 
    const covidTrackingstate = useSelector(state=>state.reducer)

    const covidDeathTrackingstate = useSelector(state=>state.CovidDeathreducer)
  
    return (
        <React.Fragment>
        <div style={{
            display:"flex",
            alignItems:"center",
            justifyContent:"center"   
        }} >

    

{covidDeathTrackingstate.Deathdata.data && covidTrackingstate.data.data?

covidTrackingstate.data.data.statewise.filter((a)=>a.state == params.statename).map((state,index)=>{
  
  let len = covidDeathTrackingstate.Deathdata.data.history.length;
  let prevsta = covidDeathTrackingstate.Deathdata.data.history[len-2].statewise.filter((a)=>a.state==state.state).map(b=>b)
  let previconf = prevsta[0].confirmed;
  let prevideath = prevsta[0].deaths;
  let previrecoverd = prevsta[0].recovered;
  let previuosactive = prevsta[0].active;
 
  let confirmed=state.confirmed-previconf;
  let deaths=state.deaths-prevideath;
  let recovered=state.recovered-previrecoverd;
  let active = state.active - previuosactive;
 return (
    
    <React.Fragment>
        <Tracking key={state.confirmed} cardColor={"#FF8D4E"} cardTitle={"Total"} data={state.confirmed} increased={confirmed}> </Tracking>
        <Tracking key={state.active} cardColor={"#0779e4"} cardTitle={"Active"} data={state.active} increased={active}/>
    
    <Tracking key={state.deaths} cardColor={"#FE4F4F"} cardTitle={"Death"} data={state.deaths} increased={deaths}> </Tracking>
    <Tracking key={state.recovered} cardColor={"#2DBF56"} cardTitle={"Recover"} data={state.recovered} increased={recovered}> </Tracking>
    
    </React.Fragment>

   
   
   

 )}):""}

        
        

        </div>
        
     
        <Linechart statename = {params.statename} ></Linechart>
   </React.Fragment>
        
    )
   

}

export default StateChart;
