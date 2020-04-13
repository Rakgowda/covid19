import React, { useState, useEffect } from 'react';

import {useSelector,useDispatch} from "react-redux"
import {Doughnut} from 'react-chartjs-2';

export default function Linechart(params){
    
    const covidStaTrackingstate = useSelector(state=>state.globalreducer)

    const color = ["#dd2c00",
    "#ff5722",'#FF6384',
    '#36A2EB',
    '#FFCE56',"#f0a500",
    "#363062","#856c8b",
    "#efa8e4","#442727",
    "#4cd3c2","#8db1ab",
    "#aeefec","#fb7b6b",
    "#018383","#bac7a7",
    "#e4508f","#50d890",
    "#697c37","#effffb",
    "#005082","#e4508f",
    "#e7f0c3","#4f98ca",
    "#a0c334","#e6a400",
    "#5d5d5d","#d1eecc",
    "#ff8080","#f34573",
    "#6384b3","#bdf2d5",
    "#454d66","#560d0d",
    "#ffb677","#f77fee",
    "#005082","#50d890",



]

const data = {
	labels: [],
	datasets: [{
		data: [],
		backgroundColor: [
		
		],
		hoverBackgroundColor: [
		]
	}]
};


   

      if(covidStaTrackingstate.data[params.statename]!= undefined)
      {
        Object.keys(covidStaTrackingstate.data[params.statename].districtData).sort((a,b)=>covidStaTrackingstate.data[params.statename].districtData[b].confirmed - covidStaTrackingstate.data[params.statename].districtData[a].confirmed).map((keyname,index)=>{
            let dis = covidStaTrackingstate.data[params.statename].districtData[keyname];        
            if(dis.delta.confirmed>0)
            {
                        keyname = keyname+"+"+dis.delta.confirmed
            }
                    data.labels = [...data.labels,keyname];
                    data.datasets[0].data = [...data.datasets[0].data,dis.confirmed]
                    data.datasets[0].backgroundColor=[...data.datasets[0].backgroundColor,color[index]]
                    data.datasets[0].hoverBackgroundColor=[...data.datasets[0].hoverBackgroundColor,color[index]]

        })
        console.log(data.labels.length)
      }

    return (
        <div>
        <h2 style={{textAlign:"center"}}>District Pie Chart</h2>
        {covidStaTrackingstate.data[params.statename]?<Doughnut width={250} height={250} options={{maintainAspectRatio: false}} data={data} />:""}
        
      </div>
    );
  
}
