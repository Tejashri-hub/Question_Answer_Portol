import React from 'react';

function Signup(){
  return(
<>
<div className="yes">
          <p className="paratwo">Sign up for free access<br/>to a community of Knowledge!</p>
          <form>
          <input className="three" type="text" name="name" placeholder="Enter your full name"/>
          <br/>
          <input className="four" type="text" name="username" placeholder="Create a Username for Yourself"/>
          <br/>           
          <input className="five" type="password" name="password" placeholder="Set a password"/>
          <input className="fiveone" type="password" placeholder="confirm password"/>  
          <br/>          
          <input className="six" type="email" name="email" placeholder="Enter valid email address"/>
          <br/>
          <input className="seven" type="checkbox"/> 
          <label>
          <a href=" ">I agree with terms and conditions</a> 
          </label> 
          <br/> 
          <button className="in" type="submit">Sign Up!</button>
          </form>
    </div>
</>
  );
}

export default Signup;