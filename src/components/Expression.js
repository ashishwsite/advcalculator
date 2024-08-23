import React from 'react'
import { useState } from 'react';

const Expression = () => {
    const [data, setdata] = useState(0);
    const [fres,setfres]=useState(0)
    // expression calculation 
    function isDigit(ch) {
        return ch >= '0' && ch <= '9';
    }
    function calculate(data) {
        
        console.log(data)
       if(data===0) return 0;
        var str=data;
        let st = [];
        let s = '';
        // Remove blank spaces from the string
        for (let e of str) {
            if (e !== ' ') s += e;
        }
        // Step 1: Declare number, result, and sign for tracking
        let num = 0;
        let res = 0;
        let sign = 1;
        for (let i = 0; i < s.length; i++) {
            // Step 2: If it's a digit, add it to the number being formed
            if (isDigit(s[i])) {
                num = num * 10 + (s[i] - '0');
            }
            // Step 3: If it's not a digit, add the previous number to the result
            else {
                res += num * sign;
                num = 0;
    
                // If '+' or '-', set the sign for the next number
                if (s[i] === '+') {
                    sign = 1;
                } else if (s[i] === '-') {
                    sign = -1;
                }
                // If '(', push the current result and sign onto the stack
                else if (s[i] === '(') {
                    st.push(res);
                    st.push(sign);
                    res = 0;
                    sign = 1;
                }
                // If ')', pop the sign and previous result from the stack and calculate the intermediate result
                else if (s[i] === ')') {
                    let tsign = st.pop();
                    let a = st.pop();
                    res = a + tsign * res;
                    num = 0;
                }
            }
        }
    
        // Add any remaining number to the result
        res += num * sign;
         setfres(res);
        return res;
    }
  return (
    <div>
     <h2 style={{textAlign:'center'}}> Expression Evaluation</h2>
     <div style={{ textAlign: "center" }}>
     <textarea class="form-control" aria-label="With textarea" id="inputid" style={{ borderRadius:'10px',textAlign:'center'}}
          onChange={(e) => {
            setdata(e.target.value);
            setfres(0)
          }}
          type="text"
          placeholder="enter data"
          value={data}></textarea>
        
        <br></br>
        <div style={{display:'flex',gap:'15px',justifyContent:'center',alignItems:'center',marginTop:'10px'}}>
        <button onClick={() => { setfres(calculate(data)); }}
        style={{ border: "solid 4px",borderRadius:'15px' ,backgroundColor:'blue'}}>
        Enter
        </button>

        <button onClick={() => { document.getElementById("inputid").value = ""; setdata(""); setfres(0 )}}
         style={{ border: "solid 4px",borderRadius:'15px' ,backgroundColor:'blue'}}>
        clear
        </button>
        </div>
  <br></br>
        <span style={{border:' solid 3px', borderRadius:'5px', padding:'10px'}}>  Ans :{fres}</span>

      </div>
      
    </div>
  )
}

export default Expression
