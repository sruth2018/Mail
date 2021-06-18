import React,{useState} from 'react'
import {Link} from "react-router-dom";
import {BrowserRouter as Router , Route,Switch} from 'react-router-dom';



function LoginPage({ Login,error }) {
    const[details, setDetails]=useState({name:"" , email:"" , password:""});

   const submitHandler =(e)=>{
        
        e.preventDefault();
        Login(details);
   }
    return (
        
            <div className="ui main">
                <h3>LOGIN FORM</h3>
                {(error!=="") ? (<div className="error">{error}</div>):""}
                <form className="ui form" onSubmit={submitHandler} >
                    <div className="field">
                        <label>Name</label>
                        <input type="text"
                            name="name"
                            placeholder="Name"
                            value={details.name}
            onChange ={(e) =>setDetails({...details , name:e.target.value})}
                        />
                    </div>

                <div className="field">
                        <label>Email</label>
                        <input type="text"
                            name="email"
                            placeholder="Email"
                            value={details.email}
            onChange ={(e) =>setDetails({...details , email:e.target.value})}
                       

                        />
                    </div>
                    <div className="field">
                        <label>Password</label>
                        <input type="password"
                            name="password"
                            value={details.password}
            onChange ={(e) =>setDetails({...details , password:e.target.value})}
                             />
                    </div>
                    <div className="ui center aligned basic segment">

                  
                        <button className="ui button blue">LOGIN</button>
                       
                      </div>
                    
                    
                  
                    <div className="ui horizontal divider">
    Or
  </div>
  <div className="ui center aligned basic segment">
   
  <button className="ui button blue">SIGN UP</button>
 

  </div>
                </form>
            </div>
        );
    
}

export default LoginPage;
