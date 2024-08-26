import React, { useState } from "react";
import NewCalendar from "./NewCalendar";
import Twoparameter from "./Twoparameter";

const Calendar = () => {
  const [data, setdata] = useState();
  const [ans, setans] = useState();
  const [discalender, setdiscalendar] = useState('none');
  const [disdaycount,setdisdaycount]=useState('none')
  const [dateformate,setdateformate]=useState('01-01-2020');
 function daycount(){
  if(disdaycount=='none')
    setdisdaycount('flex')
   else setdisdaycount('none')
 }
function showcalendar(){
  if(discalender=='none')
   setdiscalendar('flex')
  else setdiscalendar('none')
    var dateStr=data;
    let d = parseInt(dateStr.substr(0, 2));
    let m = parseInt(dateStr.substr(3, 2));
    let y = parseInt(dateStr.substr(6, 4));
    setdateformate(`${m}-${d}-${y}`);
}
  return (
    <div className="container">
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <input
          type="text"
          style={{border:'solid 1.5px',borderRadius:'11px'}}
          placeholder="formate dd-mm-yyyy"
          value={data}
          onChange={(e) => {
            setdata(e.target.value);
          }}
        />
      </div>
        <div style={{display:'flex',justifyContent:'center',marginTop:'10px',}} >
            <button  onClick={()=>{showcalendar()}} style={{borderRadius:'10px',border:'solid 3px',padding:'1px',backgroundColor:'orange',width:'200px'}} >{discalender==='none'?"Show Calender":"Hide Calender"} </button>
        </div>
        <div style={{display:'flex',justifyContent:'center',marginTop:'10px',}} >
            <button  onClick={()=>{daycount()}} style={{borderRadius:'10px',border:'solid 3px',padding:'1px',backgroundColor:'orange',width:'200px'}} >{disdaycount==='none'?"Show day count":"Hide day count"} </button>
        </div>
        <div style={{display:'flex',justifyContent:'center'}}>
        <div style={{display:disdaycount}}> 
          <Twoparameter/>
      </div>
        </div>
        
      <div style={{display:discalender}}> 
      <NewCalendar  dateformate={dateformate}/>
      </div>
    </div>
  );
};

export default Calendar;
