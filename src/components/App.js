import React from 'react'
import './App.css';
import LoginForm from "./LoginForm";
import LoginPage from "./LoginPage";
import Home from "./Home";
import Header from "./Header";
import { useState,useEffect } from 'react';
import {BrowserRouter as Router , Route,Switch} from 'react-router-dom';



 function App() {
   const adminUser={
     email:"admin123@gmail.com",
     password :"admin123"
   }

   const[user, setUser]=useState({name:"" , email:""});
   const[error, setError]=useState("");

   const Login = details =>
   {
     console.log(details);
  if(details.email === adminUser.email && details.password === adminUser.password)
  {
   console.log("LOGGED IN ");
   setUser({
     name: details.name,
     email: details.email
   });
  }
  else{
    setError("Invalid Credentials");
  }
  
  
   
}
   
   const Logout = () =>
   {
     setUser({name: "",email: ""})
     console.log("Logout");
   }
   
  const LOCAL_STORAGE_KEY ="profiles";
   const [profiles , setProfiles ] = useState([]);
   const loginFormHandler = (profile) =>
   {
     console.log(profile);
    setProfiles ([...profiles, profile]);

   };

   useEffect(() =>
    {
      const retrieveProfiles = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
      if (retrieveProfiles)setProfiles(retrieveProfiles);
    },[]);

   useEffect(() =>
   {localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(profiles));
   },[profiles]);
  
 
  return (
    <div className="ui container">

      {(user.email !=="") ?(
      <div className ="welcome">
        <h2>Welcome , <span>{user.name}</span></h2>
        <button onClick={Logout}>logout</button>
      </div>
    
       ):(
         <LoginPage Login={Login} error={error}></LoginPage>
       ) }
      <Router>
      < Header/>
      <Switch>
       
      {/* <Route exact path="/">
  <LoginPage />

      </Route>
      */}
      <Route path ="/login" render={(props) =>
        (  <LoginForm {...props} loginFormHandler = {loginFormHandler}
        />
        )}/>

<Route path ="/home"  render={(props)=>
        (
          <Home {...props} profiles={profiles} 
/>
        )}/>

</Switch>     
    
</Router>
      
 </div>
 
  )
        }



export default App;
