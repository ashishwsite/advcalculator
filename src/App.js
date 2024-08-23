// import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home'
import Oneparameter from './components/Oneparameter'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import Expression from './components/Expression';
import Conversion from './components/Conversion';
import Twoparameter from './components/Twoparameter';
import Quadratic from './components/Quadratic';
import Other from './components/Other';
// import {BrowserRouter ,Route, Routes} from "react-router-dom";



const App = () => {
  
  // const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(3)
  const [refreshKey, setRefreshKey] = useState(0);
  const [page,setcurrentpage]=useState();
  return (
    <BrowserRouter key={refreshKey}>
       <Navbar/>
      
      <div style={{height:'10px'}}></div>
      <Routes>
       <Route path="/" element={<Home/>} /> 
       <Route path="/oneparameter" element={<Oneparameter/>} /> 
       <Route path="/calculator" element={<Calculator />} /> 
       <Route path="/expression" element={<Expression/>} /> 
       <Route path="/conversion" element={<Conversion/>} /> 
       <Route path="/twoparameter" element={<Twoparameter/>} /> 
       <Route path="/qudratic" element={<Quadratic/>}/> 
       <Route path="/sports" element={<Other/>} /> 
    </Routes>
    </BrowserRouter >

  )

}

export default App;



