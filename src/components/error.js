import React from 'react'
import './error.css'
import {Link} from 'react-router-dom'

function Erorrs(){

return(

<div className="error_wrap">
  <div className="error_bg">
   <span tabIndex='0' className='error_heading' style={{color: "#fff", fontSize: "170px"}}><strong>404</strong></span> 
    <h3 tabIndex='0' style={{fontSize: "17px"}}>ERROR 404, You are trying to reach a Broken Page.<br/> The Page has Moved or Deleted...!<br/><Link to="/">Click here</Link> to go to Homepage</h3>
    </div>
</div>

)}

export default Erorrs