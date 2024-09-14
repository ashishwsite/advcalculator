import React from 'react'
import himg from "./Images/2.png"
import Calculator from './Calculator/Calculator';
import Quadratic from './Quadratic';
import Oneparameter from './Oneparameter'
const Home = () => {
  return (
    <div>
      <img src={himg} alt="landing" class="img-fluid rounded-top-3"/>
      <div style={{height:'2px',width:'100vw',border:'2px solid'}}>

      </div>
      <div>
        <h1 class="text-center" style={{color:'purple'}}>Basic Calulator</h1>
        <Calculator/>
        <div style={{height:'2px',width:'100vw',border:'2px solid'}}></div>

      </div>
      <div style={{height:'2px',width:'100vw',border:'2px solid'}}></div>
      <div>
        <Quadratic/>
      </div>
      <div style={{height:'2px',width:'100vw',border:'2px solid'}}></div>
      <Oneparameter/>
      <footer className="ftco-footer ftco-section">
		<div className="container" style={{marginTop:'50px'}}>
			<div className="row">
				<div className="col-md-12 text-center">
					<p style={{color:'yellow'}}>
						Copyright &copy;
						<script>document.write(new Date().getFullYear());</script> All rights reserved 
					</p>
				</div>
			</div>
		</div>
	</footer>
     
    </div>
  )
}

export default Home
