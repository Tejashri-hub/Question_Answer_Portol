import React, { useState } from 'react';
import Validation from './Validation';

function Login(){

const [values,setvalue] = useState({
   Username : "" , 
   Password :""
});

const [errors,seterrors] = useState({});

const Onsubmit = (e) =>{
   e.preventDefault();
   seterrors(Validation(values));
};

const InputChange = (e) =>{
   setvalue(
     {...values,
     [e.target.name] : e.target.value,
     });
};
  return(
    <>
       <div className="login">
         <p>Already Signed Up?</p>
         <form onSubmit={Onsubmit}>
           <input className="one" type="text" placeholder="Username"
           onChange={InputChange} name="Username" value={values.Username}/> 
           {errors.Username && <p className="error">{errors.Username}</p>}
           <br/>
           <input className="two" type="password" placeholder="Password" onChange={InputChange} name="Password" value={values.Password}/>
           {errors.Password && <p className="error">{errors.Password}</p>}
           <br/>
           <button>Log in</button>
           <br/>
           <a href=" ">Forgot Password</a> 
         </form> 
      </div>
    </>
  );
}

export default Login;