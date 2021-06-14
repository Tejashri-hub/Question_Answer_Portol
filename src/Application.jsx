import React from 'react';
import Appo from './Appo';
import {Route , Switch } from  'react-router-dom';
import Apptwo from './Apptwo';
import Navbar from './Navbar';


function Application(){
  return (
    <>
     <Navbar/>
   <Switch>
     <Route exact path="/" component={Appo} />
     <Route exact path="/signup" component={Apptwo} />
   </Switch>  
    </>
    ); 
}

export default Application;
    