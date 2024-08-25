import React, { useState } from "react";
import NewCalendar from "./NewCalendar";

const Calendar = () => {
  const [data, setdata] = useState();
  const [ans, setans] = useState();
  const [discalender, setdiscalendar] = useState('none');
  const [dateformate,setdateformate]=useState('01-01-2020');
 
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
    function displayday() {
      var dateStr=data;
      let d = parseInt(dateStr.substr(0, 2));
      let m = parseInt(dateStr.substr(3, 2));
      let y = parseInt(dateStr.substr(6, 4));
      
  
      const t = [0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4];
  
      // Adjust year if the month is January or February
      if (m < 3) {
          y -= 1;
      }
  
      const ans = (y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) + t[m - 1] + d) % 7;
  
      const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
      setans(days[ans]);
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
        <button  onClick={()=>{displayday()}} style={{borderRadius:'10px',border:'solid 3px',padding:'1px',backgroundColor:'orange',width:'200px'}} >Show Day 
        </button>
      </div>
        <div style={{display:'flex',justifyContent:'center',marginTop:'10px',}} >
            <button  onClick={()=>{showcalendar()}} style={{borderRadius:'10px',border:'solid 3px',padding:'1px',backgroundColor:'orange',width:'200px'}} >{discalender==='none'?"Show Calender":"Hide Calender"} </button>
        </div>
        <div style={{display:'flex',justifyContent:'center'}}><span>{(ans)? `${ans} on ${data}`  :''}</span></div>
      <div style={{display:discalender}}> 
      <NewCalendar  dateformate={dateformate}/>
      </div>
    </div>
  );
};

export default Calendar;
