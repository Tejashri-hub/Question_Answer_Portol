import React from 'react';
import Image from './Image';
import Login from './Login';
import Signup from './Signup';
import './style.css';

function Apptwo(){
  return(
    <>
    <div className="hello">
       <Image/>
       <Login/>
       <Signup/> 
  </div>
 </>
  );
}

export default Apptwo;
