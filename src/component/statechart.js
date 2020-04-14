import React, { useState, useEffect } from 'react';
import {useSelector,useDispatch} from "react-redux"

// import {RadialChart} from "react-vis"
import fetchCovidDeaths from "../redux/coviddeathtracking/covidDeathAction"
import Tracking from './TrackingLive'


function StateChart(params){
 
    const covidTrackingstate = useSelector(state=>state.reducer)

    const covidDeathTrackingstate = useSelector(state=>state.CovidDeathreducer)
  
    return (
        
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
 
  let confirmed=state.confirmed-previconf;
  let deaths=state.deaths-prevideath;
  let recovered=state.recovered-previrecoverd;
 return (
    
    <React.Fragment>
        <Tracking key={state.confirmed} cardColor={"#FF8D4E"} cardTitle={"Total"} data={state.confirmed} increased={confirmed}> </Tracking>
    <Tracking key={state.deaths} cardColor={"#FE4F4F"} cardTitle={"Death"} data={state.deaths} increased={deaths}> </Tracking>
    <Tracking key={state.recovered} cardColor={"#2DBF56"} cardTitle={"Recover"} data={state.recovered} increased={recovered}> </Tracking>

    </React.Fragment>
   
   

 )}):""}

      
        </div>
    )
   

}

export default StateChart;
