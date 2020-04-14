import React, { useState, useEffect } from 'react';
import {useSelector,useDispatch} from "react-redux"
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import StateChart from "./stateLiveTracking"

const useStyles = makeStyles((theme) => ({

  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    color:"red"
   
    
  },
}));

function StateList(){

    const [StateFla,setStateFlag] = useState(false);
    const covidDeathTrackingstate = useSelector(state=>state.CovidDeathreducer)
   
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    
    const [open, setOpen] = React.useState(false);
  
    useEffect(() => {

        if(localStorage.getItem("State")!="" && localStorage.getItem("State")!=null)
        {
            setStateFlag(true);

        }
       
    }, [])

    
    
    const handleChange = (event) => {
      setAge(event.target.value);
      localStorage.setItem("State",event.target.value)
      setStateFlag(true)
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleOpen = () => {
      setOpen(true);
    };
    function deleteStorage() { 
       localStorage.setItem("State","")
       setStateFlag(false)
setAge("")
     }
return (
    <div>
        {!StateFla?(
     <div style={{display:"flex",justifyContent:"center",marginBottom:10}}>
     
     <FormControl className={classes.formControl}>
       <InputLabel id="demo-controlled-open-select-label" style={{color:"red",}}>Select State</InputLabel>
       <Select
         labelId="demo-controlled-open-select-label"
         id="demo-controlled-open-select"
         open={open}
         onClose={handleClose}
         onOpen={handleOpen}
         value={age}
         onChange={handleChange}
         
       >
         {covidDeathTrackingstate.Deathdata.data?
         covidDeathTrackingstate.Deathdata.data.history[covidDeathTrackingstate.Deathdata.data.history.length-1].statewise.map((state,index)=>{
         return <MenuItem key={state.state} value={state.state}>{state.state}</MenuItem>

         })
         :(
    <MenuItem value={""}>Loading</MenuItem>
)}
         
        
       </Select>
     </FormControl>
   </div>
        ):
       <React.Fragment>
            <h4 style={{textAlign:"center"}}> {localStorage.getItem("State")} State COVID19 Live Tracking<sup><HighlightOffIcon style={Style.Deleted} onClick={deleteStorage}></HighlightOffIcon></sup></h4>
            <br></br>
        <StateChart statename = {localStorage.getItem("State")}></StateChart>
       
           </React.Fragment>}
    </div>
)


}


const Style = {

    Deleted:{
        color:"red",
        fontSize:15
    }

}

export default StateList;
